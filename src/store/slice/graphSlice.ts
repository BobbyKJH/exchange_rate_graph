import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GraphState {
  graphSelect: string[];
}

const initialState: GraphState = {
  graphSelect: [],
};

export const graphSlice = createSlice({
  name: "currency/graph",
  initialState,
  reducers: {
    handleGraphSelect: (state, action: PayloadAction<string[]>) => {
      state.graphSelect = [...action.payload];
    },
  },
});

export const { handleGraphSelect } = graphSlice.actions;

export const Graph = (state: { local: { graph: GraphState } }) =>
  state.local.graph;

export default graphSlice;
