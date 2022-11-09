import { DndContext, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import React, { FC } from "react";
import { useState } from "react";
import { CARD_GAP, CARD_HEIGHT } from "../../../constants/card";
import { TCell } from "../../../types/card";
import Card from "../Card";
import EmptyCard from "../EmptyCard/EmptyCard";
import css from "./CardWrapper.module.css";

interface ICardWrapper {
  cell: TCell;
  index: number;
  isUpFocus?: boolean;
}

const CardWrapper: FC<ICardWrapper> = ({ cell, index, isUpFocus }) => {
  const cellHeight = CARD_HEIGHT + (cell.length - 1) * CARD_GAP + "px";

  return (
    <>
      {cell.length ? (
        <div className={css.wrapper} style={{ height: cellHeight }}>
          <Card isUpFocus={isUpFocus} bottomCards={cell} deepIndex={0} index={index} />
        </div>
      ) : (
        <EmptyCard />
      )}
    </>
  );
};

export default CardWrapper;
