import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { clx } from "../../../utils/clx";
import css from "./NavLink.module.css";

interface INavLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const NavLink: FC<PropsWithChildren<INavLink>> = ({ children, className, href, ...props }) => {
  return (
    <Link href={href || "/"} className={clx(className, css.link)} {...props}>
      {children}
    </Link>
  );
};
