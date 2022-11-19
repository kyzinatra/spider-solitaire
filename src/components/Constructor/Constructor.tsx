import React, { FC } from "react";
import { CARD_VALUES } from "../../constants/card";
import { TGrid } from "../../types/card";
import { ConstructorWrapper } from "../Card/ConstructorWrapper/ConstructorWrapper";
import { NavButton } from "../Nav/NavButton/NavButton";

import css from "./Constructor.module.css";

interface IConstructor {
  cards: TGrid;
}

export const Constructor: FC<IConstructor> = ({ cards }) => {
  const heightStyle = { "--constructor-length": Object.keys(CARD_VALUES).length - 1 } as object;

  return (
    <div>
      <div className={css["constructor-class"]} style={heightStyle}>
        {cards?.map((cell, i) => (
          <ConstructorWrapper key={i} index={i} cell={cell[0]} />
        ))}
      </div>
      <ul className={css.constructor__nav}>
        <NavButton className={css.constructor__button}>Публиковать</NavButton>
        <NavButton className={css.constructor__button}>Играть</NavButton>
        <NavButton className={css.constructor__button}>Генерировать</NavButton>
      </ul>
    </div>
  );
};
