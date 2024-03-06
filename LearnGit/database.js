import mysql from "mysql2/promise";

export const base = mysql.createPool({
    host: "localhost",
    port:'3308',
    user: "root",
    password: "",
    database: "",
});