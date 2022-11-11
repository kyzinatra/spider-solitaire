import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockCards } from "../../constants/card";
import { TCell, TGrid } from "../../types/card";
import { isValidStack } from "../../utils/isValidConf";

interface SelectState {
  cards: TGrid | null;
  dragCards: TCell | null;
  snapshots: TGrid[] | null;
  dragId: string | number | null;
}

const initialState: SelectState = {
  // prettier-ignore
  cards: mockCards,
  dragCards: null,
  snapshots: null,
  dragId: null,
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<TGrid>) {
      state.cards = action.payload;
    },
    setDragCards(state, action: PayloadAction<TCell>) {
      const dragIndex = state.cards?.findIndex(cell => cell.some(card => card.key == action.payload?.[0].key));
      state.dragCards = action.payload;
      state.dragId = dragIndex || -1;
    },
    moveCards(state, action: PayloadAction<number>) {
      const toCell = state.cards?.[action.payload];
      if (!state.dragCards || !toCell) return;
      const isValidMove = !toCell.length || isValidStack([toCell[toCell.length - 1], ...state.dragCards]);
      if (!isValidMove) return;

      const fromCellIndex = state.cards?.findIndex(cell => cell.some(card => card.key == state.dragCards?.[0].key));
      const fromCardIndex = state.cards?.[fromCellIndex || 0].findIndex(card => card.key == state.dragCards?.[0].key);
      if (fromCellIndex == undefined || fromCardIndex == undefined) return;
      // set new cards to place
      state.cards?.[fromCellIndex].splice(fromCardIndex);
      state.cards?.splice(action.payload, 1, [...toCell, ...state.dragCards]);
    },
    clearDrag(state) {
      state.dragCards = null;
    },
    storeSnapshot(state) {
      if (state.cards) state.snapshots = [...(state.snapshots || []), state.cards];
    },
    restoreSnapshot(state) {
      if (!state.snapshots?.length) return;
      state.cards = state.snapshots.pop() || null;
    },
  },
});

export const { setCards, setDragCards, clearDrag, storeSnapshot, restoreSnapshot, moveCards } = cardSlice.actions;

export const cardReducer = cardSlice.reducer;
