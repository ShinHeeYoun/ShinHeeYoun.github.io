package dev.shinheeyoun.scores;

/**
 * What a nickname may be. The same rules as normalizeNickname() in src/tools/yacht/nickname.ts on the site, tested
 * with the same cases (server/scores/fixtures/nicknames.json):
 * letters (any language), digits, underscore and hyphen, with single spaces between words; 1 to 12 characters;
 * the plain space is the only kind of white space.
 */
final class Nickname {
    static final int MAX_LENGTH = 12;

    private Nickname() {}

    /** The nickname with its spaces tidied, or null if it may not be used. */
    static String normalize(String input) {
        if (input == null) return null;

        // Runs of plain spaces become one, and there are none at either end.
        StringBuilder tidy = new StringBuilder(input.length());
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (c == ' ' && (tidy.length() == 0 || tidy.charAt(tidy.length() - 1) == ' ')) continue;
            tidy.append(c);
        }
        if (tidy.length() > 0 && tidy.charAt(tidy.length() - 1) == ' ') tidy.setLength(tidy.length() - 1);

        String name = tidy.toString();
        if (name.isEmpty() || name.codePointCount(0, name.length()) > MAX_LENGTH) return null;
        for (int i = 0; i < name.length(); ) {
            int codePoint = name.codePointAt(i);
            boolean allowed =
                    Character.isLetter(codePoint) || Character.isDigit(codePoint) || codePoint == '_' || codePoint == '-' || codePoint == ' ';
            if (!allowed) return null;
            i += Character.charCount(codePoint);
        }
        return name;
    }
}
