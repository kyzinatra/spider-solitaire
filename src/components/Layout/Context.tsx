import { DragStartEvent, DragEndEvent, DndContext, DragOverlay } from "@dnd-kit/core";
import React, { FC, PropsWithChildren } from "react";
import { useCustomSensors } from "../../hooks/useCustomSensors";
import { useAppDispatch } from "../../services";
import { setDragCards, storeSnapshot, moveCards, checkFullStacks, clearDrag } from "../../services/slices/cards";
import { TGrid } from "../../types/card";
import { getStackById } from "../../utils/cardStack";
import { ProinterDetection } from "../../utils/collisionDetection";

interface IContext {
  cards?: TGrid | null;
}

const Context: FC<PropsWithChildren<IContext>> = ({ children, cards }) => {
  const dispatch = useAppDispatch();
  const sensors = useCustomSensors();

  function dragStartHandler(event: DragStartEvent) {
    //? get draggable cards by active id. And put it to redux.
    const dragCards = getStackById(cards || [], event.active.id);

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
      {children}
    </DndContext>
  );
};

export default Context;
