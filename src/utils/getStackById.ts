import { TCell, TGrid } from "../types/card";

export function getStackById(card: TGrid, id: string | number): null | TCell {
  const cell = card.find(cell => cell.some(card => card.key === id));
  if (!cell) return null;
  const keyIndex = cell.findIndex(card => card.key === id);
  return [...cell].slice(keyIndex);
}
