import { TCard, TGrid } from "../types/card";
export const CARD_HEIGHT = 178;
export const CARD_GAP = 30;

export const CARD_DRAG = "CARD_DRAG";
export const CARD_VALUES = {
  "2": 0,
  "3": 1,
  "4": 2,
  "5": 3,
  "6": 4,
  "7": 5,
  "8": 6,
  "9": 7,
  "10": 8,
  "V": 9,
  "Q": 10,
  "K": 11,
  "A": 12,
};

export const mockCards: TGrid = [
  [
    { title: "A", key: "1" },
    { title: "K", key: "2" },
    { title: "Q", key: "3" },
    { title: "V", key: "4" },
    { title: "10", key: "5" },
  ],
  [
    { title: "9", key: "6" },

    { title: "2", key: "12" },
    { title: "6", key: "aaa" },
    { title: "5", key: "9" },
  ],
  [],
  [{ title: "2", key: "13" }],
  [],
  [
    { title: "7", key: "7" },
    { title: "8", key: "71" },
  ],
  [
    { title: "4", key: "10" },
    { title: "3", key: "11" },
  ],
  [],
  [{ title: "7", key: "14" }],
  [],
  [{ title: "10", key: "15" }],
  [],
  [],
  [],
  [{ title: "A", key: "16" }],
  [],
  [],
  [{ title: "K", key: "17" }],
  [],
  [],
  [],
  [],
  [],
  [],
];
