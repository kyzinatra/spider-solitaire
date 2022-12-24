import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cardReducer } from "./slices/cards";
import { recordReducer } from "./slices/records";
import { selectReducer } from "./slices/select";
import { toastReducer } from "./slices/toasts";
import { userReducer } from "./slices/user";

export const store = configureStore({
  reducer: {
    select: selectReducer,
    cards: cardReducer,
    user: userReducer,
    toast: toastReducer,
    records: recordReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
