import { type } from "os";

export type cardsTitles = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "V" | "Q" | "K" | "A";

export type TCard = {
  title: cardsTitles;
  key: string;
  removed?: boolean;
};

export type TCell = TCard[];
export type TGrid = TCell[];
