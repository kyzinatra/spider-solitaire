import React, { MouseEvent } from "react";
import { LOCAL_CARDS } from "../../../constants/card";
import { useAppDispatch, useAppSelector } from "../../../services";
import { setCards } from "../../../services/slices/cards";
import { NavButton } from "../../Nav/NavButton/NavButton";
import { NavLink } from "../../Nav/NavLink/NavLink";

import css from "./ConstructorNav.module.css";

export const ConstructorNav = () => {
  const gridCards = useAppSelector(app => app.cards.cards);
  const dispatch = useAppDispatch();

  function GameStartHandler(e: MouseEvent) {
    localStorage.setItem(LOCAL_CARDS, JSON.stringify(gridCards));
  }

  function AddCard(e: MouseEvent) {
    dispatch(setCards([...(gridCards || []), []]));
  }
  function RemoveCard(e: MouseEvent) {
    const newCards = [...(gridCards || [])];
    newCards.pop();
    dispatch(setCards(newCards));
  }

  return (
    <ul className={css.constructor__nav}>
      <NavLink href="/" className={css.constructor__button} onClick={GameStartHandler}>
        Играть
      </NavLink>
      <NavButton className={css.constructor__button}>Генерировать</NavButton>
      <NavButton className={css.constructor__button} onClick={AddCard}>
        Новая карта
      </NavButton>
      <NavButton className={css.constructor__button} onClick={RemoveCard}>
        Удалить карту
      </NavButton>
    </ul>
  );
};
