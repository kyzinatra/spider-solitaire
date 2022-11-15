import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_CARD_VALUE, mockCards } from "../../constants/card";
import { TCell, TGrid } from "../../types/card";
import { isValidStack } from "../../utils/isValidStack";
import { hasFullStack } from "../../utils/cardStack";

interface IStats {
  length: number;
  steps: number;
  drops: number;
}

interface SelectState {
  cards: TGrid | null;
  dragCards: TCell | null;
  snapshots: TGrid[];
  statsSnapshots: IStats[];
  dragId: string | number | null;
  stats: IStats;
}

const initialState: SelectState = {
  // prettier-ignore
  cards: mockCards,
  dragCards: null,
  dragId: null,
  snapshots: [],
  statsSnapshots: [],
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
    removeCards(state, action: PayloadAction<number[]>) {
      state.cards?.[action.payload[0]].splice(action.payload[1], 1);
    },
    setDragCards(state, action: PayloadAction<TCell>) {
      const dragIndex = state.cards?.findIndex(cell => cell.some(card => card.key === action.payload?.[0].key));
      state.dragCards = action.payload;
      state.dragId = dragIndex !== undefined ? dragIndex : -1;
    },
    checkFullStacks(state) {
      const cards = state.cards;
      if (!cards) return;
      cards.forEach((cell, i) => {
        const findId = hasFullStack(cell);
        if (~findId) {
          for (let j = findId; j < findId + MAX_CARD_VALUE + 1; j++) cards[i][j].removed = true;
        }
      });
    },

    moveCards(state, action: PayloadAction<number>) {
      const toCell = state.cards?.[action.payload];
      if (!state.dragCards || !toCell) return;
      const isValidMove = !toCell.length || isValidStack([toCell[toCell.length - 1], ...state.dragCards]);

      if (!isValidMove) {
        state.snapshots?.pop();
        state.statsSnapshots?.pop();
        return;
      }

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
      if (!state.cards) return;

      state.cards.forEach(cell => cell.map(card => ({ ...card, removed: undefined })));
      state.snapshots.push(state.cards);
      state.statsSnapshots.push(state.stats);
    },
    restoreSnapshot(state) {
      if (!state.snapshots?.length) return;
      state.cards = state.snapshots.pop() || null;
      state.stats = state.statsSnapshots.pop() || initialState.stats;
    },
  },
});

export const { setCards, setDragCards, clearDrag, storeSnapshot, restoreSnapshot, moveCards, checkFullStacks, removeCards } =
  cardSlice.actions;

export const cardReducer = cardSlice.reducer;
