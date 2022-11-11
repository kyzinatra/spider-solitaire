import { useDroppable } from "@dnd-kit/core";
import React, { FC } from "react";
import { CARD_GAP, CARD_HEIGHT } from "../../../constants/card";
import { useAppSelector } from "../../../services";
import { TCell } from "../../../types/card";
import { clx } from "../../../utils/clx";
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
  const dragId = useAppSelector(s => s.cards.dragId);
  // prettier-ignore
  const { setNodeRef, over, isOver: isElOver } = useDroppable({
    id: index,
  });
  console.log(over?.id, dragId, isElOver);
  const isOver = over?.id !== dragId && isElOver ? true : false;
  return (
    <>
      {cell.length ? (
        <div className={clx(css.wrapper, isOver && css.wrapper__over)} style={{ height: cellHeight }} ref={setNodeRef}>
          <Card isUpFocus={isUpFocus} bottomCards={cell} deepIndex={0} index={index} />
        </div>
      ) : (
        <EmptyCard ref={setNodeRef} isOver={isOver} />
      )}
    </>
  );
};

export default CardWrapper;
