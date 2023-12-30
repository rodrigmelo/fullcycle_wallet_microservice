import { db } from "./config";

type IUpdateBalance = {
  account_id: string;
  account_balance: number;
};

export const updateBalance = async (props: IUpdateBalance) => {
  try {
    await db.execute("UPDATE balances SET balance = ? WHERE id = ?", [
      props.account_balance,
      props.account_id,
    ]);
  } catch (err: any) {
    console.log("Ocorreu um erro ao atualizar um registro: ", err);
  }
};
