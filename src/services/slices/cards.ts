import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_CARD_VALUE, mockCards } from "../../constants/card";
import { TCell, TGrid } from "../../types/card";
import { isValidStack } from "../../utils/isValidConf";
import { HasFullStack } from "../../utils/Stack";

interface SelectState {
  cards: TGrid | null;
  dragCards: TCell | null;
  snapshots: TGrid[] | null;
  dragId: string | number | null;
  stats: {
    length: number;
    steps: number;
    drops: number;
  };
}

const initialState: SelectState = {
  // prettier-ignore
  cards: mockCards,
  dragCards: null,
  snapshots: null,
  dragId: null,
  stats: {
    length: 0,
    steps: 0,
    drops: 0,
  },
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<TGrid>) {
      state.cards = action.payload;
    },
    setDragCards(state, action: PayloadAction<TCell>) {
      const dragIndex = state.cards?.findIndex(cell => cell.some(card => card.key === action.payload?.[0].key));
      state.dragCards = action.payload;
      state.dragId = dragIndex !== undefined ? dragIndex : -1;
    },
    checkFullStacks(state) {
      state.cards?.forEach((cell, i) => {
        const findId = HasFullStack(cell);
        if (~findId) state.cards?.[i].splice(findId, MAX_CARD_VALUE + 1);
      });
    },
    moveCards(state, action: PayloadAction<number>) {
      const toCell = state.cards?.[action.payload];
      if (!state.dragCards || !toCell) return;
      const isValidMove = !toCell.length || isValidStack([toCell[toCell.length - 1], ...state.dragCards]);
      if (!isValidMove) return;

      const fromCardIndex = state.cards?.[+(state.dragId || 0)].findIndex(card => card.key === state.dragCards?.[0].key);
      if (state.dragId === null || fromCardIndex === undefined) return;
      //? set new cards to place
      state.cards?.[+state.dragId].splice(fromCardIndex);
      state.cards?.splice(action.payload, 1, [...toCell, ...state.dragCards]);

      //? update stats
      state.stats.drops += +!toCell.length;
      state.stats.steps++;
      state.stats.length += Math.abs(+state.dragId - action.payload);
    },
    clearDrag(state) {
      state.dragCards = null;
      state.dragId = null;
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

export const { setCards, setDragCards, clearDrag, storeSnapshot, restoreSnapshot, moveCards, checkFullStacks } =
  cardSlice.actions;

export const cardReducer = cardSlice.reducer;
