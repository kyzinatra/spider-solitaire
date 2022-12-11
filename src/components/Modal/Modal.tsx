import React, { FC, PropsWithChildren, useEffect } from "react";
import ReactDOM from "react-dom";
import { useMounted } from "../../hooks/useMounted";

import css from "./Modal.module.css";

interface IModal {
  open?: boolean;
  onClose?: () => any;
}

export const Modal: FC<PropsWithChildren<IModal>> = ({ children, open, onClose }) => {
  const isMounted = useMounted();

  useEffect(() => {
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") onClose && onClose();
    }
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose]);
  if (!isMounted || typeof window === "undefined" || !open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={css.modal__wrapper}>
        <div className={css.modal}>
          <div className={css.modal__content}>
            <span className={css.modal__times} onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
        <div className={css.modal_overlay} onClick={onClose} />
      </div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};
