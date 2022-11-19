import React, { FC } from "react";
import Image from "next/image";
import css from "./Toast.module.css";
import { clx } from "../../../utils/clx";
import { removeToast, TToast } from "../../../services/slices/toasts";
import { useAppDispatch } from "../../../services";

export const Toast: FC<TToast> = ({ type = "info", code, message, id }) => {
  const dispatch = useAppDispatch();
  function removeHandler() {
    dispatch(removeToast(id));
  }

  return (
    <div className={clx(css.toast, css[`toast_${type}`])} role="alert" onClick={removeHandler}>
      <Image className={css.toast__img} src={`/${type}.svg`} width={22} height={22} alt="error message" />
      <div className={css.toast__content}>
        {code && <p className={css.toast__code}>Code {code}</p>}
        <span className={css.toast__reason}>{message}</span>
      </div>
    </div>
  );
};
