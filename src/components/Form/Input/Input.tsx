import React, { FC, PropsWithChildren } from "react";
import { clx } from "../../../utils/clx";

import css from "./Input.module.css";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<PropsWithChildren<IInput>> = ({ children, className, ...porps }) => {
  return (
    <input className={clx(className, css.input)} {...porps}>
      {children}
    </input>
  );
};
