import axios from "axios";
import { ExchangeDate } from "./utils";

export const ExchangeRate = async (
  date: string = ExchangeDate,
  currency: string = "krw"
) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_EXCHANGE + `/${date}/currencies/${currency}.json`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
