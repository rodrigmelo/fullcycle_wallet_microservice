import express, { Request, Response } from "express";
import { kafkaStart } from "./kafka/kafka-config";
import { db } from "./database/config";
import { getBalance } from "./database/getBalance";

const app = express();

kafkaStart();
db.connect();

app.get("/balances/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const results = await getBalance(id);
  return res.send(results);
});

app.listen(3003, () => console.log("app listen port 3003!"));
