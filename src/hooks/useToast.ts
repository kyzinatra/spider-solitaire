import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { TIMEOUT } from "../constants/toast";
import { useAppDispatch } from "../services";
import { addToast, removeToast, TToast } from "../services/slices/toasts";

export function useToast(timeout: number = TIMEOUT) {
  const dispatch = useAppDispatch();

  const addToastHandler = useCallback(
    function (message: string, type?: TToast["type"], code?: TToast["code"]) {
      const newId = uuid();
      dispatch(
        addToast({
          id: newId,
          message,
          type,
          code,
        })
      );

      setTimeout(() => {
        dispatch(removeToast(newId));
      }, timeout);
    },
    [dispatch, timeout]
  );

  return addToastHandler;
}
