import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { clx } from "../../../utils/clx";

import css from "../Button/Button.module.css";

interface IButtonLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ButtonLink: FC<PropsWithChildren<IButtonLink>> = ({ children, className, href, ...props }) => {
  return (
    <Link href={href || "/"} className={clx(className, css.button)} {...props}>
      {children}
    </Link>
  );
};
