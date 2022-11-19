import React, { FC } from "react";
import { TCard } from "../../../types/card";
import { Card } from "../Card";
import css from "./ConstructorWrapper.module.css";

interface ICardWrapper {
  cell: TCard;
  index: number;
}

export const ConstructorWrapper: FC<ICardWrapper> = ({ cell, index }) => {
  return <Card className={css.constructor__cards} alwaysVisible bottomCards={[cell]} deepIndex={0} index={index} />;
};
