import axios from "axios";

export const ExchangeRate = async (currency: string) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_EXCHANGE_RATES + `${currency}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
