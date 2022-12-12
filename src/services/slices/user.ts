import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email?: string | null;
  uid?: string | null;
  isAuth: boolean;
  isEmailVerified?: boolean;
  provider?: string;
  creationTime?: string;
  lastSingInTime?: string;
  displayName?: string | null;
}

const initialState: UserState = {
  isAuth: false,
  isEmailVerified: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
