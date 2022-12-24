import React, { MouseEvent } from "react";
import { v4 as uuid } from "uuid";
import { CARD_VALUES, CREATOR, LOCAL_CARDS, MAPID } from "../../../constants/card";
import { useToast } from "../../../hooks/useToast";
import { useAppDispatch, useAppSelector } from "../../../services";
import { pushCard, setCards } from "../../../services/slices/cards";
import { cardsTitles } from "../../../types/card";
import { getRand } from "../../../utils/rand";
import { NavButton } from "../../Nav/NavButton/NavButton";
import { NavLink } from "../../Nav/NavLink/NavLink";

import css from "./ConstructorNav.module.css";

export const ConstructorNav = () => {
  const gridCards = useAppSelector(app => app.cards.cards);
  const userName = useAppSelector(app => app.user.displayName);
  const dispatch = useAppDispatch();
  const addToast = useToast();

  function GameStartHandler(e: MouseEvent) {
    if (gridCards?.every(cell => !cell.length)) {
      addToast("Нельзя создать пустую карту", "error");
      e.preventDefault();
    }
    localStorage.setItem(LOCAL_CARDS, JSON.stringify(gridCards));
    localStorage.removeItem(MAPID);
    if (userName) localStorage.setItem(CREATOR, userName);
  }

  function AddCard(e: MouseEvent) {
    dispatch(setCards([...(gridCards || []), []]));
  }

  function RemoveCard(e: MouseEvent) {
    const newCards = [...(gridCards || [])];
    newCards.pop();
    dispatch(setCards(newCards));
  }

  function GenerateCards(e: MouseEvent) {
    if ((gridCards?.length || 0) < 2) return addToast("Добавьте хотя бы 2 поля для карт", "error");
    const cells = gridCards?.length as number;
    for (let card of Object.keys(CARD_VALUES).reverse()) {
      dispatch(
        pushCard([
          getRand(0, cells),
          {
            title: card as cardsTitles,
            key: uuid(),
          },
        ])
      );
    }
  }

  return (
    <ul className={css.constructor__nav}>
      <NavLink href="/" className={css.constructor__button} onClick={GameStartHandler}>
        Играть
      </NavLink>
      <NavButton className={css.constructor__button} onClick={GenerateCards}>
        Генерировать
      </NavButton>
      <NavButton className={css.constructor__button} onClick={AddCard}>
        Новая карта
      </NavButton>
      <NavButton className={css.constructor__button} onClick={RemoveCard}>
        Удалить карту
      </NavButton>
    </ul>
  );
};
