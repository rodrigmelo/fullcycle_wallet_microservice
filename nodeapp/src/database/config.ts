import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "mysql-balance",
  user: "root",
  password: "root",
  database: "balance",
});
