import React, { FC } from "react";
import { clx } from "../../utils/clx";
import NavLink from "./NavLink/NavLink";
import NavInfo from "./NavInfo/NavInfo";

import css from "./Nav.module.css";

const Nav: FC = () => {
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
          <NavInfo content={999999}>Длина</NavInfo>
        </li>
        <li>
          <NavInfo content={0}>Шаги</NavInfo>
        </li>
        <li>
          <NavInfo content={100}>Сбросы</NavInfo>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
