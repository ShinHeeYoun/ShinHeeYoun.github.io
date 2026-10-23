package dev.shinheeyoun.scores;

/** Tells whether a GitHub token belongs to someone who may change this site's repository: the site's admin. */
interface AdminVerifier {
    boolean isAdmin(String token);
}
