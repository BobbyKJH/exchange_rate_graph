import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {
  currencyKind: string;
  currencySelect: string[];
}

const initialState: CurrencyState = {
  currencyKind: "KRW",
  currencySelect: [],
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    handleExchangeCurrency: (state, action: PayloadAction<string>) => {
      state.currencyKind = action.payload;
    },
    handleExchangeSelect: (state, action: PayloadAction<string[]>) => {
      state.currencySelect = [...action.payload];
    },
  },
});

export const { handleExchangeCurrency, handleExchangeSelect } =
  currencySlice.actions;

export const Currency = (state: { currency: CurrencyState }) => state.currency;
export default currencySlice;
