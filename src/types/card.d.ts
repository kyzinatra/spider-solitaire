import { type } from "os";

export type TCard = {
  title: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "V" | "Q" | "K" | "A";
  key: string;
  removed?: boolean;
};

export type TCell = TCard[];
export type TGrid = TCell[];
