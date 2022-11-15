import { CARD_VALUES as CV } from "../constants/card";
import { TCell } from "../types/card";

export function isValidStack(cell: TCell): boolean {
  if (!cell.length || cell.length === 1) return true;
  return cell.every((card, i) => CV[card.title] + i === CV[cell[0].title]);
}
