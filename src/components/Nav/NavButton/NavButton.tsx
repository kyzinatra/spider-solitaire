import { useRouter } from "next/router";
import React, { FC } from "react";
import { clx } from "../../../utils/clx";

import css from "../NavLink/NavLink.module.css";

interface INavButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const NavButton: FC<INavButton> = ({ children, className, ...props }) => {
  const router = useRouter();
  if (router.pathname !== "/" && router.pathname !== "/constructor") {
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
