import React, { FC } from "react";
import { clx } from "../../utils/clx";
import { NavLink } from "./NavLink/NavLink";

import css from "./Nav.module.css";
import { useAppDispatch } from "../../services";
import { restoreSnapshot } from "../../services/slices/cards";
import { NavButton } from "./NavButton/NavButton";

export const Nav: FC = () => {
  const dispacth = useAppDispatch();

  return (
    <nav className={clx(css.nav)}>
      <ul className={clx(css.nav__list)}>
        <li>
          <NavLink href="/rules">Правила</NavLink>
        </li>
        <li>
          <NavLink href="/">Игра</NavLink>
        </li>
        <li>
          <NavButton onClick={() => dispacth(restoreSnapshot())}>Назад</NavButton>
        </li>
      </ul>
    </nav>
  );
};
