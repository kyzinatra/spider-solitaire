import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCell, TGrid } from "../../types/card";

interface SelectState {
  cards: TGrid | null;
  dragCards: TCell | null;
  snapshots: TGrid[] | null;
}

const initialState: SelectState = {
  // prettier-ignore
  cards: [
    [{ title: "A", key: "1" },{ title: "K", key: "2" },{ title: "Q", key: "3" },{ title: "V", key: "4" }, { title: "10", key: "5" }, { title: "9", key: "6" },{ title: "8", key: "7" },{ title: "7", key: "8" },{ title: "5", key: "9" }, { title: "4", key: "10" },{ title: "3", key: "11" },{ title: "2", key: "12" },],
    [],[],
    [{ title: "2", key: "13" }],[],[],[],[],[{ title: "7", key: "14" }],[],
    [{ title: "10", key: "15" }],[],[],[],
    [{ title: "A", key: "16" }],[],[],[{ title: "K", key: "17" }],[],[],[],[],[],[],],
  dragCards: null,
  snapshots: null,
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<TGrid>) {
      state.cards = action.payload;
    },
    setDragCards(state, action: PayloadAction<TCell>) {
      state.dragCards = action.payload;
    },
    clearDrag(state) {
      state.dragCards = null;
    },
    storeSnapshot(state, action: PayloadAction<TGrid>) {
      state.snapshots = [...(state.snapshots || []), action.payload];
    },
    restoreSnapshot(state) {
      if (!state.snapshots?.length) return;
      state.cards = state.snapshots.pop() || null;
    },
  },
});

export const { setCards, setDragCards, clearDrag, storeSnapshot, restoreSnapshot } =
  cardSlice.actions;

export const cardReducer = cardSlice.reducer;
