import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TToast = {
  type?: "error" | "success" | "info" | "warning";
  code?: `${number}` | number;
  message: string;
  id: string;
};

const initialState: TToast[] = [];

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<TToast>) => {
      state.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export const toastReducer = toastSlice.reducer;
