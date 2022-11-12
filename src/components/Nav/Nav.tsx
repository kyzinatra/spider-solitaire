import React, { FC } from "react";
import { clx } from "../../utils/clx";
import NavLink from "./NavLink/NavLink";
import NavInfo from "./NavInfo/NavInfo";

import css from "./Nav.module.css";
import { useAppSelector } from "../../services";

const Nav: FC = () => {
  const { length, drops, steps } = useAppSelector(s => s.cards.stats);

  return (
    <nav className={clx(css.nav)}>
      <ul className={clx(css.nav__list)}>
        <li>
          <NavLink href="/">Правила</NavLink>
        </li>
        <li>
          <NavLink href="/">Игра</NavLink>
        </li>
        <li>
          <NavLink href="/">Назад</NavLink>
        </li>
        <li>
          <NavInfo content={length}>Длина</NavInfo>
        </li>
        <li>
          <NavInfo content={steps}>Шаги</NavInfo>
        </li>
        <li>
          <NavInfo content={drops}>Сбросы</NavInfo>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
