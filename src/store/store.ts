import { configureStore } from "@reduxjs/toolkit";

import dialogSlice from "./slice/dialogSlice";
import { currencySlice } from "./slice/currencySlice";

export const store = configureStore({
  reducer: {
    dialog: dialogSlice.reducer,
    currency: currencySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
