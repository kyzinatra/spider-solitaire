import { useDroppable } from "@dnd-kit/core";
import React, { FC } from "react";
import { useAppSelector } from "../../../services";
import { TCell } from "../../../types/card";
import { clx } from "../../../utils/clx";
import { Card } from "../Card";
import { EmptyCard } from "../EmptyCard/EmptyCard";
import css from "./CardWrapper.module.css";

interface ICardWrapper {
  cell: TCell;
  index: number;
  isUpFocus?: boolean;
  isConstructor?: boolean;
}

export const CardWrapper: FC<ICardWrapper> = ({ cell, index, isUpFocus, isConstructor }) => {
  const cssVars = { "--cell-length": cell.length - 1, "--card-index": (isConstructor && index) || 0 } as object;
  const dragId = useAppSelector(s => s.cards.dragId);
  // prettier-ignore
  const { setNodeRef, over, isOver: isElOver } = useDroppable({id: index});
  const isOver = over?.id !== dragId && !isConstructor && isElOver;
  const wraperrClass = clx(css.wrapper, isOver && css.wrapper__over, isConstructor && css.wraperr_constructor);

  return (
    <>
      {cell.length ? (
        <div className={wraperrClass} style={cssVars} ref={setNodeRef}>
          <Card alwaysVisible={isConstructor} isUpFocus={isUpFocus} bottomCards={cell} deepIndex={0} index={index} />
        </div>
      ) : (
        <EmptyCard ref={setNodeRef} isOver={isOver} />
      )}
    </>
  );
};
