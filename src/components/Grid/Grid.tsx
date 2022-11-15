import React, { FC } from "react";
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";

import CardWrapper from "../Card/CardWrapper/CardWrapper";

import css from "./Grid.module.css";

import { useAppDispatch, useAppSelector } from "../../services";
import { checkFullStacks, clearDrag, moveCards, setDragCards, storeSnapshot } from "../../services/slices/cards";

import { getStackById } from "../../utils/stack";
import { ProinterDetection } from "../../utils/collisionDetection";

import { useCustomSensors } from "../../hooks/useCustomSensors";
import { TCell } from "../../types/card";

const Grid: FC = () => {
  const { cards, dragCards } = useAppSelector(s => s.cards);
  const dispatch = useAppDispatch();
  const sensors = useCustomSensors();

  function dragStartHandler(event: DragStartEvent) {
    if (!cards) return;
    const dragCards = getStackById(cards, event.active.id);
    if (!dragCards) return;
    dispatch(setDragCards(dragCards));
  }

  function dragEndHandler(event: DragEndEvent) {
    if (event.over?.id !== undefined) {
      dispatch(storeSnapshot());
      dispatch(moveCards(+event.over?.id));
      dispatch(checkFullStacks());
    }
    dispatch(clearDrag());
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      collisionDetection={ProinterDetection()}
    >
      <div className={css.grid}>
        {cards?.map((cell, i) => (
          <CardWrapper key={i} index={i} cell={cell as TCell} />
        ))}
      </div>
      <DragOverlay>{dragCards && <CardWrapper isUpFocus index={0} cell={dragCards} />}</DragOverlay>
    </DndContext>
  );
};

export default Grid;
