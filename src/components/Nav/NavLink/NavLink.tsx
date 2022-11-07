import React, { FC, PropsWithChildren } from "react";
import { clx } from "../../../utils/clx";
import css from "./NavLink.module.css";

interface INavLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavLink: FC<PropsWithChildren<INavLink>> = ({ children, className, ...props }) => {
  return (
    <a className={clx(className, css.link)} {...props}>
      {children}
    </a>
  );
};

export default NavLink;
