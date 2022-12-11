import React, { FC } from "react";
import { CARD_VALUES } from "../../constants/card";
import { TGrid } from "../../types/card";
import { ConstructorWrapper } from "../Card/ConstructorWrapper/ConstructorWrapper";

import css from "./Constructor.module.css";

interface IConstructor {
  cards: TGrid;
}

export const Constructor: FC<IConstructor> = ({ cards }) => {
  const heightStyle = { "--constructor-length": Object.keys(CARD_VALUES).length - 1 } as object;

  return (
    <aside className={css["constructor-class"]} style={heightStyle}>
      {cards?.map((cell, i) => (
        <ConstructorWrapper key={i} index={i} cell={cell[0]} />
      ))}
    </aside>
  );
};
