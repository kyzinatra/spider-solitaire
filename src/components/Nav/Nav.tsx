import React, { FC } from "react";
import { clx } from "../../utils/clx";
import { NavLink } from "./NavLink/NavLink";
import Image from "next/image";

import css from "./Nav.module.css";

import { useAppDispatch, useAppSelector } from "../../services";
import { restoreSnapshot } from "../../services/slices/cards";
import { NavButton } from "./NavButton/NavButton";

export const Nav: FC = () => {
  const dispacth = useAppDispatch();
  const isAuth = useAppSelector(s => s.user.isAuth);

  return (
    <nav className={clx(css.nav)}>
      <ul className={clx(css.nav__list)}>
        <NavLink href="/rules">
          <Image src="/book.svg" width={30} height={30} alt="Правила" />
        </NavLink>
        <NavLink href="/">
          <Image src="/game.svg" width={30} height={30} alt="Игра" />
        </NavLink>
        <NavLink href="/constructor">
          <Image src="/build.svg" width={30} height={30} alt="Конструктор" />
        </NavLink>
        <NavLink href="/records">
          <Image src="/stars.svg" width={30} height={30} alt="Рекорды" />
        </NavLink>
        <NavLink href={isAuth ? "/profile" : "/login"}>
          <Image src="/profile.svg" width={30} height={30} alt="Профиль" />
        </NavLink>
        <NavButton onClick={() => dispacth(restoreSnapshot())}>
          <Image src="/back.svg" width={30} height={30} alt="Назад" />
        </NavButton>
      </ul>
    </nav>
  );
};
