import React, { FC } from "react";
import CardWrapper from "../Card/CardWrapper/CardWrapper";
import { TCell } from "../../types/card";
import css from "./Grid.module.css";
import { DndContext, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { useAppDispatch, useAppSelector } from "../../services";
import { clearDrag, setDragCards } from "../../services/slices/cards";
import { getStackById } from "../../utils/getStackById";
import { useCustomSensors } from "../../hooks/useCustomSensors";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

const Grid: FC = () => {
  const cards = useAppSelector(s => s.cards.cards);
  const dragging = useAppSelector(s => s.cards.dragCards);
  const dispatch = useAppDispatch();
  const sensors = useCustomSensors();
  function dragStartHandler(event: DragStartEvent) {
    if (!cards) return;
    const dragCards = getStackById(cards, event.active.id);
    if (!dragCards) return;
    dispatch(setDragCards(dragCards));
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={dragStartHandler}
      onDragEnd={() => dispatch(clearDrag)}
    >
      <div className={css.grid}>
        {cards?.map((cell, i) => (
          <CardWrapper key={i} index={i} cell={cell as TCell} />
        ))}
      </div>
      <DragOverlay>{dragging && <CardWrapper isUpFocus index={0} cell={dragging} />}</DragOverlay>
    </DndContext>
  );
};

export default Grid;
