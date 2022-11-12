import React, { FC, MouseEvent } from "react";
import { clx } from "../../utils/clx";
import NavLink from "./NavLink/NavLink";
import NavInfo from "./NavInfo/NavInfo";

import css from "./Nav.module.css";
import { useAppDispatch, useAppSelector } from "../../services";
import { restoreSnapshot } from "../../services/slices/cards";

const Nav: FC = () => {
  const { length, drops, steps } = useAppSelector(s => s.cards.stats);
  const dispacth = useAppDispatch();
  function backClick(e: MouseEvent) {
    e.preventDefault();
    dispacth(restoreSnapshot());
  }

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
          {/*TODO: Сделать это кнопками а не ссылками обязательно  */}
          <NavLink href="/" onClick={backClick}>
            Назад
          </NavLink>
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
