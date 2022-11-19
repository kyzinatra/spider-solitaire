import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCell } from "../../types/card";

interface UserState {
  user: {
    email?: string | null;
    uid?: string | null;
    isAuth: boolean;
    isEmailVerified?: boolean;
    provider?: string;
    creationTime?: string;
    lastSingInTime?: string;
  };
}

const initialState: UserState = {
  user: {
    isAuth: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState["user"]>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
