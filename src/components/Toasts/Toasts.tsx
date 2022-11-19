import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import css from "./Toasts.module.css";
import { Toast } from "./Toast/Toast";
import { useAppSelector } from "../../services";

function Toasts() {
  const [mounted, setMounted] = useState(false);
  const toastsContent = useAppSelector(s => s.toast);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === "undefined" || !mounted) {
    return null;
  }

  const el = document.getElementById("toasts") as HTMLDivElement;
  return ReactDOM.createPortal(
    <div className={css.toasts}>
      {toastsContent.map(el => (
        <Toast key={el.id} {...el} />
      ))}
    </div>,
    el
  );
}

export default Toasts;
