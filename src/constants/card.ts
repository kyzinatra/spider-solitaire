import { TGrid } from "../types/card";
export const CARD_HEIGHT = 178;
export const CARD_GAP = 30;

export const CARD_DRAG = "CARD_DRAG";
export const CARD_VALUES = {
  //! All cards values from 0 to n
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

export const MAX_CARD_VALUE = 12; //! n

export const mockCards: TGrid = [
  [
    { title: "A", key: "1" },
    { title: "K", key: "2" },
    { title: "Q", key: "3" },
    { title: "V", key: "3" },
    { title: "10", key: "5" },
    { title: "9", key: "6" },
    { title: "8", key: "7A" },
    { title: "7", key: "7B" },
    { title: "6", key: "7C" },
    { title: "5", key: "7D" },
    { title: "4", key: "7E" },
    { title: "3", key: "7F" },
  ],
  [
    { title: "9", key: "8" },

    { title: "2", key: "9" },
    { title: "6", key: "10" },
    { title: "2", key: "11" },
  ],
  [
    { title: "2", key: "12" },
    { title: "A", key: "13" },
    { title: "V", key: "14" },
  ],
  [
    { title: "4", key: "15" },
    { title: "7", key: "16" },
    { title: "Q", key: "17" },
  ],
  [
    { title: "6", key: "18" },
    { title: "5", key: "19" },
  ],
  [
    { title: "7", key: "20" },
    { title: "8", key: "21" },
    { title: "8", key: "22" },
  ],
  [
    { title: "4", key: "23" },
    { title: "3", key: "24" },
  ],
  [
    { title: "3", key: "25" },
    { title: "K", key: "26" },
  ],
];
