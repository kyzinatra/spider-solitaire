import React, { FC, PropsWithChildren } from "react";
import { clx } from "../../../utils/clx";
import css from "./NavInfo.module.css";

interface INavInfo {
  content?: number;
  className?: string;
}

const NavInfo: FC<PropsWithChildren<INavInfo>> = ({ content = 0, children, className }) => {
  if (content > 999999) content = 999999;
  return (
    <div className={clx(className, css.info)}>
      <span className={clx(css.info__title)}>{children}</span>
      <span className={clx(css.info__content)}>{new Intl.NumberFormat(undefined, { style: "decimal" }).format(content)}</span>
    </div>
  );
};

export default NavInfo;
