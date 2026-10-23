package dev.shinheeyoun.scores;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * A small, strict JSON reader, so that the app needs no library. It follows the JSON standard and reads numbers the
 * way a browser does: a number with no fraction (41, 41.0, 4.1e1) is a Long, anything else is a Double.
 * Objects become Map, arrays become List, and JSON null becomes Java null.
 */
final class Json {
    static final class JsonException extends Exception {
        private static final long serialVersionUID = 1L;

        JsonException(String message) {
            super(message);
        }
    }

    private static final int MAX_DEPTH = 32;
    private static final int MAX_NUMBER_LENGTH = 32;

    private final String text;
    private int pos;

    private Json(String text) {
        this.text = text;
    }

    static Object parse(String text) throws JsonException {
        if (text == null) throw new JsonException("no text");
        Json reader = new Json(text);
        reader.skipWhitespace();
        Object value = reader.readValue(0);
        reader.skipWhitespace();
        if (reader.pos != text.length()) throw reader.error("unexpected text after the value");
        return value;
    }

    /** The text as a JSON string with its quotes: quotes, backslashes and control characters are escaped. */
    static String quote(String value) {
        final char backslash = (char) 92;
        StringBuilder out = new StringBuilder(value.length() + 2).append('"');
        for (int i = 0; i < value.length(); i++) {
            char c = value.charAt(i);
            if (c == '"' || c == backslash) out.append(backslash).append(c);
            else if (c == 10) out.append(backslash).append('n');
            else if (c == 13) out.append(backslash).append('r');
            else if (c == 9) out.append(backslash).append('t');
            else if (c < 0x20) out.append(backslash).append('u').append(String.format("%04x", (int) c));
            else out.append(c);
        }
        return out.append('"').toString();
    }

    private JsonException error(String message) {
        return new JsonException(message + " (at position " + pos + ")");
    }

    private void skipWhitespace() {
        while (pos < text.length()) {
            char c = text.charAt(pos);
            if (c == ' ' || c == '\t' || c == '\n' || c == '\r') pos++;
            else break;
        }
    }

    private Object readValue(int depth) throws JsonException {
        if (depth > MAX_DEPTH) throw error("nested too deeply");
        if (pos >= text.length()) throw error("unexpected end");
        char c = text.charAt(pos);
        switch (c) {
            case '{':
                return readObject(depth);
            case '[':
                return readArray(depth);
            case '"':
                return readString();
            case 't':
                return readLiteral("true", Boolean.TRUE);
            case 'f':
                return readLiteral("false", Boolean.FALSE);
            case 'n':
                return readLiteral("null", null);
            default:
                if (c == '-' || (c >= '0' && c <= '9')) return readNumber();
                throw error("unexpected character");
        }
    }

    private Object readLiteral(String word, Object value) throws JsonException {
        if (!text.startsWith(word, pos)) throw error("unknown word");
        pos += word.length();
        return value;
    }

    private Map<String, Object> readObject(int depth) throws JsonException {
        Map<String, Object> map = new LinkedHashMap<>();
        pos++; // {
        skipWhitespace();
        if (pos < text.length() && text.charAt(pos) == '}') {
            pos++;
            return map;
        }
        while (true) {
            skipWhitespace();
            if (pos >= text.length() || text.charAt(pos) != '"') throw error("a key in quotes was expected");
            String key = readString();
            skipWhitespace();
            if (pos >= text.length() || text.charAt(pos) != ':') throw error("a colon was expected");
            pos++;
            skipWhitespace();
            map.put(key, readValue(depth + 1));
            skipWhitespace();
            if (pos >= text.length()) throw error("unexpected end");
            char c = text.charAt(pos++);
            if (c == '}') return map;
            if (c != ',') throw error("a comma or } was expected");
        }
    }

    private List<Object> readArray(int depth) throws JsonException {
        List<Object> list = new ArrayList<>();
        pos++; // [
        skipWhitespace();
        if (pos < text.length() && text.charAt(pos) == ']') {
            pos++;
            return list;
        }
        while (true) {
            skipWhitespace();
            list.add(readValue(depth + 1));
            skipWhitespace();
            if (pos >= text.length()) throw error("unexpected end");
            char c = text.charAt(pos++);
            if (c == ']') return list;
            if (c != ',') throw error("a comma or ] was expected");
        }
    }

    private String readString() throws JsonException {
        StringBuilder out = new StringBuilder();
        pos++; // opening quote
        while (true) {
            if (pos >= text.length()) throw error("the string is not closed");
            char c = text.charAt(pos++);
            if (c == '"') return out.toString();
            if (c < 0x20) throw error("a control character in a string");
            if (c != '\\') {
                out.append(c);
                continue;
            }
            if (pos >= text.length()) throw error("the string is not closed");
            char escape = text.charAt(pos++);
            switch (escape) {
                case '"':
                case '\\':
                case '/':
                    out.append(escape);
                    break;
                case 'b':
                    out.append('\b');
                    break;
                case 'f':
                    out.append('\f');
                    break;
                case 'n':
                    out.append('\n');
                    break;
                case 'r':
                    out.append('\r');
                    break;
                case 't':
                    out.append('\t');
                    break;
                case 'u':
                    out.append(readHex4());
                    break;
                default:
                    throw error("unknown escape");
            }
        }
    }

    private char readHex4() throws JsonException {
        if (pos + 4 > text.length()) throw error("a short unicode escape");
        int value = 0;
        for (int i = 0; i < 4; i++) {
            int digit = Character.digit(text.charAt(pos + i), 16);
            if (digit < 0 || text.charAt(pos + i) > 'f') throw error("a bad unicode escape");
            value = value * 16 + digit;
        }
        pos += 4;
        return (char) value;
    }

    private Object readNumber() throws JsonException {
        int start = pos;
        if (text.charAt(pos) == '-') pos++;
        if (pos >= text.length()) throw error("a number was expected");
        if (text.charAt(pos) == '0') {
            pos++;
        } else if (text.charAt(pos) >= '1' && text.charAt(pos) <= '9') {
            while (pos < text.length() && isDigit(text.charAt(pos))) pos++;
        } else {
            throw error("a number was expected");
        }
        if (pos < text.length() && text.charAt(pos) == '.') {
            pos++;
            if (pos >= text.length() || !isDigit(text.charAt(pos))) throw error("digits were expected after the point");
            while (pos < text.length() && isDigit(text.charAt(pos))) pos++;
        }
        if (pos < text.length() && (text.charAt(pos) == 'e' || text.charAt(pos) == 'E')) {
            pos++;
            if (pos < text.length() && (text.charAt(pos) == '+' || text.charAt(pos) == '-')) pos++;
            if (pos >= text.length() || !isDigit(text.charAt(pos))) throw error("digits were expected in the exponent");
            while (pos < text.length() && isDigit(text.charAt(pos))) pos++;
        }
        String literal = text.substring(start, pos);
        if (literal.length() > MAX_NUMBER_LENGTH) throw error("a number that is too long");
        try {
            BigDecimal number = new BigDecimal(literal);
            try {
                return number.longValueExact();
            } catch (ArithmeticException notAWholeNumber) {
                return number.doubleValue();
            }
        } catch (NumberFormatException e) {
            throw error("a bad number");
        }
    }

    private static boolean isDigit(char c) {
        return c >= '0' && c <= '9';
    }
}
