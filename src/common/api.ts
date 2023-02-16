import axios from "axios";

export const ExchangeRate = async (query: string) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_EXCHANGE_RATES + `${query}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
