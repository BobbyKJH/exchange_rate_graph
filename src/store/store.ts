import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { dialogSlice } from "./slice/dialogSlice";
import { currencySlice } from "./slice/currencySlice";
import { graphSlice } from "./slice/graphSlice";

import thunk from "redux-thunk";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  dialog: dialogSlice.reducer,
  currency: currencySlice.reducer,
  graph: graphSlice.reducer,
});

const localConfig = {
  key: "root/Local",
  storage,
  whitelist: ["graph"],
};

const reducer = persistReducer(localConfig, rootReducers);

export const store = configureStore({
  reducer,

  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
