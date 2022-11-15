import React, { FC } from "react";
import { clx } from "../../../utils/clx";

import css from "../NavLink/NavLink.module.css";

interface INavButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const NavButton: FC<INavButton> = ({ children, className, ...props }) => {
  return (
    <button className={clx(className, css.link)} {...props}>
      {children}
    </button>
  );
};
