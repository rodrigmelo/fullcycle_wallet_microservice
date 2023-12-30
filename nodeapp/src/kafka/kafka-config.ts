import { Kafka } from "kafkajs";
import { updateBalance } from "../database/updateBalance";

const kafka = new Kafka({
  clientId: "nodeapp",
  brokers: ["kafka:29092"],
});

const consumer = kafka.consumer({ groupId: "wallet" });

export const kafkaStart = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "balances", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const parsedMessage = JSON.parse(message.value?.toString() as string);
      await updateBalance({
        account_id: parsedMessage.Payload.account_id_to,
        account_balance: parsedMessage.Payload.balance_account_id_to,
      });
      await updateBalance({
        account_id: parsedMessage.Payload.account_id_from,
        account_balance: parsedMessage.Payload.balance_account_id_from,
      });
    },
  });
};
