import { configureStore } from "@reduxjs/toolkit";

import dailogSlice from "./slice/dailogSlice";

export const store = configureStore({
  reducer: {
    dialog: dailogSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
