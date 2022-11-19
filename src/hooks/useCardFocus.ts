import { useState, FocusEvent } from "react";
import { TCell } from "../types/card";
import { clearSelect, setSelect } from "../services/slices/select";
import { isValidStack } from "../utils/isValidStack";
import { useAppDispatch } from "../services";

type hookRet = [boolean, { onFocus: (e: FocusEvent) => void; onBlur: (e: FocusEvent) => void }];

export function useCardFocus(bottomCards: TCell, index: number): hookRet {
  const [isFoucs, setFocus] = useState(false);
  const dispatch = useAppDispatch();

  function focusHandler(e: FocusEvent) {
    e.stopPropagation();
    dispatch(setSelect({ selected: bottomCards, pos: index }));
    setFocus(true);
  }
  function blurHandler(e: FocusEvent) {
    e.stopPropagation();
    dispatch(clearSelect());
    setFocus(false);
  }

  return [isFoucs && isValidStack(bottomCards), { onFocus: focusHandler, onBlur: blurHandler }];
}
