const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: "postgres", // Default database
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

(async () => {
    try {
        await pool.query("CREATE DATABASE token_loader;");
        console.log("Database created successfully!");
    } catch (err) {
        console.error("Error creating database:", err);
    } finally {
        pool.end();
    }
})();
