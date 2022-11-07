import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCell } from "../../types/card";

interface SelectState {
  selected: TCell | null;
  pos: number | null;
}

const initialState: SelectState = {
  selected: null,
  pos: null,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    setSelect(_, action: PayloadAction<SelectState>) {
      return action.payload;
    },
    clearSelect() {
      return initialState;
    },
  },
});

export const { setSelect, clearSelect } = selectSlice.actions;

export const selectReducer = selectSlice.reducer;
