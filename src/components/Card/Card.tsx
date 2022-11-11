import React, { FC } from "react";

import { useDraggable } from "@dnd-kit/core";

import { useCardFocus } from "../../hooks/useCardFocus";
import { TCell } from "../../types/card";
import { clx } from "../../utils/clx";
import { isValidStack } from "../../utils/isValidConf";
import { CARD_GAP } from "../../constants/card";

import css from "./Card.module.css";

interface ICard {
  bottomCards: TCell;
  deepIndex: number;
  isUpFocus?: boolean;
  index: number;
}

const Card: FC<ICard> = ({ bottomCards, deepIndex, isUpFocus, index }) => {
  const [isFoucs, focusAttr] = useCardFocus(bottomCards, index);
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: bottomCards[0].key,
    disabled: !isValidStack(bottomCards),
  });
  const currCard = bottomCards[0];
  const border = deepIndex && css.card_border;
  const classNames = clx(css.card__wrapper, isDragging && css.card__dragging);

  return (
    <div
      className={classNames}
      style={{ top: deepIndex ? CARD_GAP : 0 }}
      ref={setNodeRef}
      {...focusAttr}
      {...listeners}
      {...attributes}
    >
      {/* prettier-ignore */}
      <div 
        className={clx(css.card, border, (isFoucs || isUpFocus) && css.card_focus, !deepIndex && css.card__first)}
      >
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
