import { CARD_VALUES } from "../constants/card";
import { TGrid } from "../types/card";
import { v4 as uuidv4 } from "uuid";

export function getNewConstructorCards(): TGrid {
  return Object.keys(CARD_VALUES).map((a, i) => [{ title: a, key: uuidv4() }]) as TGrid;
}
