import React, { FC } from "react";
import { clx } from "../../../utils/clx";

import css from "./Button.module.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: "icon" | "button" | "invs";
}

export const Button: FC<IButton> = ({ styleType, children, className, ...props }) => {
  const styleClass = css[`button_${styleType}`];

  return (
    <button {...props} className={clx(className, css.button, styleClass)}>
      {children}
    </button>
  );
};
