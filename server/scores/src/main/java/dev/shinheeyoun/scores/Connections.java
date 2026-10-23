package dev.shinheeyoun.scores;

import java.sql.Connection;
import java.sql.SQLException;

/** Where a repository gets a database connection from. Closing the connection gives it back. */
interface Connections {
    Connection borrow() throws SQLException;
}
