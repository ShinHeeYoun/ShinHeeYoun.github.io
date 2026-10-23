package dev.shinheeyoun.scores;

import java.nio.charset.StandardCharsets;
import java.security.GeneralSecurityException;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

/**
 * Keeps a guestbook password as a salted PBKDF2 hash ("pbkdf2-sha256$iterations$salt$hash"), not as the text itself.
 * The password only has to be shown again to the server to delete a comment, never read back, so there is nothing to
 * decrypt: if the table were ever read by someone else, the passwords people reuse elsewhere would not be in it.
 */
final class PasswordHasher {
    static final int ITERATIONS = 20_000;
    private static final String PREFIX = "pbkdf2-sha256";
    private static final char SEPARATOR = '$';
    private static final int SALT_BYTES = 16;
    private static final int HASH_BITS = 256;
    private static final SecureRandom RANDOM = new SecureRandom();

    private PasswordHasher() {}

    static String hash(String password) {
        byte[] salt = new byte[SALT_BYTES];
        RANDOM.nextBytes(salt);
        return PREFIX + SEPARATOR + ITERATIONS + SEPARATOR + encode(salt) + SEPARATOR + encode(derive(password, salt, ITERATIONS));
    }

    /** True when the password is the one that made this stored hash. A stored value in any other shape is never a match. */
    static boolean matches(String stored, String password) {
        if (stored == null || password == null) return false;
        String[] parts = stored.split("[" + SEPARATOR + "]", -1);
        if (parts.length != 4 || !parts[0].equals(PREFIX)) return false;
        try {
            int iterations = Integer.parseInt(parts[1]);
            if (iterations < 1 || iterations > 1_000_000) return false;
            byte[] salt = Base64.getDecoder().decode(parts[2]);
            byte[] expected = Base64.getDecoder().decode(parts[3]);
            // MessageDigest.isEqual takes the same time wherever the two differ.
            return MessageDigest.isEqual(expected, derive(password, salt, iterations));
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

    private static byte[] derive(String password, byte[] salt, int iterations) {
        PBEKeySpec spec = new PBEKeySpec(password.toCharArray(), salt, iterations, HASH_BITS);
        try {
            return SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256").generateSecret(spec).getEncoded();
        } catch (GeneralSecurityException e) {
            throw new IllegalStateException("PBKDF2 is not available", e);
        } finally {
            spec.clearPassword();
        }
    }

    private static String encode(byte[] bytes) {
        return new String(Base64.getEncoder().encode(bytes), StandardCharsets.US_ASCII);
    }
}
