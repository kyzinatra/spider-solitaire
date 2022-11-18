import React, { FC } from "react";

import { CardWrapper } from "../Card/CardWrapper/CardWrapper";

import css from "./Grid.module.css";

import { useAppSelector } from "../../services";
import { TCell } from "../../types/card";

export const Grid: FC = () => {
  const { cards } = useAppSelector(s => s.cards);

  return (
    <>
      <div className={css.grid}>
        {cards?.map((cell, i) => (
          <CardWrapper key={i} index={i} cell={cell as TCell} />
        ))}
      </div>
    </>
  );
};
