import React, { FC } from "react";
import { clx } from "../../../utils/clx";

import css from "../NavLink/NavLink.module.css";

interface INavButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const NavButton: FC<INavButton> = ({ children, className, ...props }) => {
  if (typeof window != "undefined" && window.location.pathname !== "/") {
    return null;
  }

  return (
    <li>
      <button className={clx(className, css.link)} {...props}>
        {children}
      </button>
    </li>
  );
};
