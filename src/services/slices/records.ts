import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCell } from "../../types/card";
import { TRecords } from "../../types/records";

interface SelectState {
  records: TRecords[];
  page: number;
}

const initialState: SelectState = {
  records: [],
  page: 1,
};

export const recordSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    addRecords(state, action: PayloadAction<TRecords[]>) {
      state.records = state.records.concat(action.payload);
    },
    setRecords(state, action: PayloadAction<TRecords[]>) {
      state.records = action.payload;
    },
  },
});

export const { addRecords, setRecords } = recordSlice.actions;

export const recordReducer = recordSlice.reducer;
