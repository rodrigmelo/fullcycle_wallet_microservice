import { db } from "./config";

export const getBalance = async (id: string) => {
  return new Promise((resolve, reject) => {
    db.execute(
      "SELECT * FROM balances WHERE id = ?",
      [id],
      (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};
