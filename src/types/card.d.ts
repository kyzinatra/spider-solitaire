import { type } from "os";

export interface TCard {
  title: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "V" | "Q" | "K" | "A";
}

export type TCell = TCard[];
export type TGrid = TCell[];
