import React, { FC } from "react";

import { useDraggable } from "@dnd-kit/core";

import { useCardFocus } from "../../hooks/useCardFocus";
import { TCell } from "../../types/card";
import { clx } from "../../utils/clx";
import { isValidStack } from "../../utils/isValidStack";

import css from "./Card.module.css";
import { useAnimation } from "../../hooks/useAnimation";
import { useAppDispatch, useAppSelector } from "../../services";
import { removeCardsInCell } from "../../services/slices/cards";

interface ICard {
  bottomCards: TCell;
  deepIndex: number;
  isUpFocus?: boolean;
  index: number;
  alwaysVisible?: boolean;
  className?: string;
}

export const Card: FC<ICard> = ({ bottomCards, deepIndex, isUpFocus, index, alwaysVisible, className }) => {
  const currCard = bottomCards[0];

  const dispatch = useAppDispatch();
  const isFreeMode = useAppSelector(s => s.cards.isFreeMode);

  const [isFoucs, focusAttr] = useCardFocus(bottomCards, index);

  const isRemoved = useAnimation({
    isStart: currCard.removed,
    onAnimEnd: () => {
      dispatch(removeCardsInCell([index, deepIndex]));
    },
  });
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: currCard.key,
    disabled: !(isFreeMode || isValidStack(bottomCards)),
  });

  const classNames = clx(css.card__wrapper, !alwaysVisible && isDragging && css.card__dragging, className);
  const isDeep = { "--is-card-deep": +!!deepIndex, "--card-index": index } as object;

  const border = (alwaysVisible || deepIndex) && css.card_border;
  const foucsStyle = (isFoucs || isUpFocus) && css.card_focus;

  return (
    <div className={classNames} style={isDeep} ref={setNodeRef} {...focusAttr} {...listeners} {...attributes}>
      <div className={clx(css.card, border, foucsStyle, !deepIndex && css.card__first, isRemoved && css.card__removed)}>
        <span className={clx(css.card__title, css.card__title_top)}>{currCard.title}</span>
        <span className={clx(css.card__title, css.card__title_center)}>{currCard.title}</span>
        <span className={clx(css.card__title, css.card__title_bottom)}>{currCard.title}</span>
      </div>
      {bottomCards.length > 1 && (
        <Card deepIndex={deepIndex + 1} index={index} isUpFocus={isFoucs || isUpFocus} bottomCards={bottomCards.slice(1)} />
      )}
    </div>
  );
};
