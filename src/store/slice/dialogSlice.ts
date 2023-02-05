import { createSlice } from "@reduxjs/toolkit";

interface IDialogState {
  calculator: boolean;
}

const initialState: IDialogState = {
  calculator: false,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state: IDialogState) => {
      state.calculator = true;
    },
    closeDialog: (state: IDialogState) => {
      state.calculator = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export const calculatorState = (state: { dialog: { calculator: boolean } }) =>
  state.dialog.calculator;

export default dialogSlice;
