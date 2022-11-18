import React, { FC } from "react";
import { TGrid } from "../../types/card";
import { CardWrapper } from "../Card/CardWrapper/CardWrapper";
import css from "./Constructor.module.css";

interface IConstructor {
  cards: TGrid;
}

export const Constructor: FC<IConstructor> = ({ cards }) => {
  return (
    <>
      <div className={css["constructor-class"]}>
        {cards?.map((cell, i) => (
          <CardWrapper isConstructor key={i} index={i} cell={cell} />
        ))}
      </div>
    </>
  );
};
