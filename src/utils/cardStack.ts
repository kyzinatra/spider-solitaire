import { CARD_VALUES, MAX_CARD_VALUE } from "../constants/card";
import { TCell, TGrid } from "../types/card";

export function getStackById(grid: TGrid, id: string | number): null | TCell {
  const cell = grid.find(cell => cell.some(card => card.key === id));
  if (!cell) return null;
  const keyIndex = cell.findIndex(card => card.key === id);
  return [...cell].slice(keyIndex);
}

export function hasFullStack(cell: TCell): number {
  let stackCount = 0;
  let res = -1;
  cell.forEach((card, i) => {
    if (CARD_VALUES[card.title] === MAX_CARD_VALUE - stackCount) stackCount += 1;
    else return (stackCount = 0);
    if (stackCount === MAX_CARD_VALUE + 1) return (res = i - MAX_CARD_VALUE);
  });
  return res;
}
