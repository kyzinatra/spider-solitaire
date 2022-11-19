import React, { FC } from "react";
import { clx } from "../../../utils/clx";
import { Button } from "../../Form/Button/Button";

interface INavButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const NavButton: FC<INavButton> = ({ children, className, ...props }) => {
  return (
    <li>
      <Button className={clx(className)} {...props}>
        {children}
      </Button>
    </li>
  );
};
