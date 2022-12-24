import React from "react";
import { Input } from "../../Form/Input/Input";

import Image from "next/image";
import { ICON_SIZE } from "../../../constants/image";
import { NavLink } from "../../Nav/NavLink/NavLink";

import css from "./RecordsNav.module.css";

export const RecordsNav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.nav__list}>
        <NavLink href="/">
          <Image src="/back.svg" width={ICON_SIZE} height={ICON_SIZE} alt="На главную" />
        </NavLink>
        <NavLink href="profile">
          <Image src="/profile.svg" width={ICON_SIZE} height={ICON_SIZE} alt="Профиль" />
        </NavLink>
        <NavLink href="/">
          <Image src="/game.svg" width={ICON_SIZE} height={ICON_SIZE} alt="Играть" />
        </NavLink>
        <li className={css.nav__inputs}>
          <Input placeholder="Имя автора" />
          <Input placeholder="ID результата" />
        </li>
      </ul>
    </nav>
  );
};
