package dev.shinheeyoun.scores;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * The rules of Yacht Dice, and the check of a finished game. This is the same logic as src/tools/yacht/controller.ts
 * (scoreFor and verifyRecord) on the site; both are tested with the same cases in server/scores/fixtures, so they
 * cannot disagree about what a real game is.
 */
final class YachtRules {
    enum Category {
        ACES("aces"),
        DEUCES("deuces"),
        THREES("threes"),
        FOURS("fours"),
        FIVES("fives"),
        SIXES("sixes"),
        CHOICE("choice"),
        FOUR_OF_A_KIND("fourOfAKind"),
        FULL_HOUSE("fullHouse"),
        SMALL_STRAIGHT("smallStraight"),
        LARGE_STRAIGHT("largeStraight"),
        YACHT("yacht");

        final String id;

        Category(String id) {
            this.id = id;
        }

        boolean isUpper() {
            return ordinal() < 6;
        }

        /** The category with this exact name, or null. */
        static Category byId(String id) {
            for (Category category : values()) {
                if (category.id.equals(id)) return category;
            }
            return null;
        }
    }

    static final int DICE = 5;
    static final int TURNS = 12;
    static final int UPPER_BONUS_THRESHOLD = 63;
    static final int UPPER_BONUS = 35;

    private YachtRules() {}

    /** One finished turn: the five dice that were scored, and where. */
    record Turn(int[] dice, Category category) {}

    /** What the check found. When valid, the numbers are worked out from the turns, not taken from the record. */
    record Verdict(boolean valid, String reason, int total, int upperSum, int bonus, List<Turn> turns) {
        static Verdict invalid(String reason) {
            return new Verdict(false, reason, 0, 0, 0, List.of());
        }
    }

    static int upperBonus(int upperSum) {
        return upperSum >= UPPER_BONUS_THRESHOLD ? UPPER_BONUS : 0;
    }

    /** The points these five dice (each 1 to 6) give in this category. */
    static int score(Category category, int[] dice) {
        if (dice == null || dice.length != DICE) throw new IllegalArgumentException("five dice are needed");
        int[] counts = new int[7];
        int sum = 0;
        for (int face : dice) {
            if (face < 1 || face > 6) throw new IllegalArgumentException("a die must show 1 to 6");
            counts[face]++;
            sum += face;
        }
        switch (category) {
            case ACES:
                return counts[1];
            case DEUCES:
                return counts[2] * 2;
            case THREES:
                return counts[3] * 3;
            case FOURS:
                return counts[4] * 4;
            case FIVES:
                return counts[5] * 5;
            case SIXES:
                return counts[6] * 6;
            case CHOICE:
                return sum;
            case FOUR_OF_A_KIND:
                return hasCount(counts, 4, true) ? sum : 0;
            case FULL_HOUSE:
                return hasCount(counts, 3, false) && hasCount(counts, 2, false) ? sum : 0;
            case SMALL_STRAIGHT:
                return hasRun(counts, 1, 4) || hasRun(counts, 2, 4) || hasRun(counts, 3, 4) ? 15 : 0;
            case LARGE_STRAIGHT:
                return hasRun(counts, 1, 5) || hasRun(counts, 2, 5) ? 30 : 0;
            case YACHT:
                return hasCount(counts, 5, false) ? 50 : 0;
            default:
                throw new IllegalStateException("unknown category");
        }
    }

    // Some face shows exactly this many times (or at least this many).
    private static boolean hasCount(int[] counts, int wanted, boolean orMore) {
        for (int face = 1; face <= 6; face++) {
            if (orMore ? counts[face] >= wanted : counts[face] == wanted) return true;
        }
        return false;
    }

    private static boolean hasRun(int[] counts, int from, int length) {
        for (int face = from; face < from + length; face++) {
            if (counts[face] == 0) return false;
        }
        return true;
    }

    /**
     * Checks a finished game as it came from JSON (see Json). It is a real game when there are 12 turns, each with five
     * dice showing whole numbers 1 to 6 and a category of its own, and the record's upperSum, bonus and total are
     * exactly what those turns give.
     */
    static Verdict verify(Object record) {
        if (!(record instanceof Map<?, ?> map)) return Verdict.invalid("the record is not an object");
        if (!(map.get("turns") instanceof List<?> turns) || turns.size() != TURNS) {
            return Verdict.invalid("there must be exactly " + TURNS + " turns");
        }

        Set<Category> used = EnumSet.noneOf(Category.class);
        List<Turn> checked = new ArrayList<>();
        int total = 0;
        int upper = 0;
        for (Object item : turns) {
            if (!(item instanceof Map<?, ?> turn)) return Verdict.invalid("a turn is not an object");
            int[] dice = readDice(turn.get("dice"));
            if (dice == null) return Verdict.invalid("a turn does not have five dice showing 1 to 6");
            Category category = turn.get("category") instanceof String name ? Category.byId(name) : null;
            if (category == null) return Verdict.invalid("a turn has an unknown category");
            if (!used.add(category)) return Verdict.invalid("a category is used twice");
            int points = score(category, dice);
            total += points;
            if (category.isUpper()) upper += points;
            checked.add(new Turn(dice, category));
        }

        int bonus = upperBonus(upper);
        if (!isWholeNumber(map.get("upperSum"), upper)) return Verdict.invalid("upperSum does not match the turns");
        if (!isWholeNumber(map.get("bonus"), bonus)) return Verdict.invalid("bonus does not match the turns");
        if (!isWholeNumber(map.get("total"), total + bonus)) return Verdict.invalid("total does not match the turns");
        return new Verdict(true, "", total + bonus, upper, bonus, List.copyOf(checked));
    }

    private static int[] readDice(Object value) {
        if (!(value instanceof List<?> list) || list.size() != DICE) return null;
        int[] dice = new int[DICE];
        for (int i = 0; i < DICE; i++) {
            if (!(list.get(i) instanceof Long face) || face < 1 || face > 6) return null;
            dice[i] = face.intValue();
        }
        return dice;
    }

    private static boolean isWholeNumber(Object value, int expected) {
        return value instanceof Long number && number == expected;
    }

    /** The turns as JSON, built from what was checked, so that nothing else the sender included is kept. */
    static String turnsJson(List<Turn> turns) {
        StringBuilder out = new StringBuilder("[");
        for (int i = 0; i < turns.size(); i++) {
            if (i > 0) out.append(',');
            Turn turn = turns.get(i);
            out.append("{\"dice\":[");
            for (int d = 0; d < turn.dice().length; d++) {
                if (d > 0) out.append(',');
                out.append(turn.dice()[d]);
            }
            out.append("],\"category\":").append(Json.quote(turn.category().id)).append('}');
        }
        return out.append(']').toString();
    }
}
