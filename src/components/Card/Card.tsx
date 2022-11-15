import React, { FC } from "react";

import { useDraggable } from "@dnd-kit/core";

import { useCardFocus } from "../../hooks/useCardFocus";
import { TCell } from "../../types/card";
import { clx } from "../../utils/clx";
import { isValidStack } from "../../utils/isValidStack";
import { CARD_GAP } from "../../constants/card";

import css from "./Card.module.css";
import { useAnimation } from "../../hooks/useAnimation";
import { useAppDispatch } from "../../services";
import { removeCards } from "../../services/slices/cards";

interface ICard {
  bottomCards: TCell;
  deepIndex: number;
  isUpFocus?: boolean;
  index: number;
}

const Card: FC<ICard> = ({ bottomCards, deepIndex, isUpFocus, index }) => {
  const currCard = bottomCards[0];
  const dispatch = useAppDispatch();
  const [isFoucs, focusAttr] = useCardFocus(bottomCards, index);
  const isRemoved = useAnimation({
    isStart: currCard.removed,
    onAnimEnd: () => {
      dispatch(removeCards([index, deepIndex]));
    },
  });

  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: currCard.key,
    disabled: !isValidStack(bottomCards),
  });

  const border = deepIndex && css.card_border;
  const classNames = clx(css.card__wrapper, isDragging && css.card__dragging);
  const foucsStyle = (isFoucs || isUpFocus) && css.card_focus;

  return (
    <div
      className={classNames}
      style={{ top: deepIndex ? CARD_GAP : 0 }}
      ref={setNodeRef}
      {...focusAttr}
      {...listeners}
      {...attributes}
    >
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

export default Card;
