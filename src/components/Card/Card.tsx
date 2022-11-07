import React, { FC, useState, FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { CARD_GAP } from "../../constants/card";
import { useCardFocus } from "../../hooks/useCardFocus";
import { clearSelect, setSelect } from "../../services/slices/select";
import { TCell } from "../../types/card";
import { clx } from "../../utils/clx";
import css from "./Card.module.css";

interface ICard {
  bottomCards: TCell;
  deepIndex: number;
  isUpFocus?: boolean;
  index: number;
}

const Card: FC<ICard> = ({ bottomCards, deepIndex, isUpFocus, index }) => {
  const [isFoucs, focusHandler, blurHandler] = useCardFocus(bottomCards, index);

  const currCard = bottomCards[0];
  const border = deepIndex && css.card_border;
  const top = deepIndex ? CARD_GAP : 0;

  return (
    <div
      className={clx(css.card__wrapper)}
      style={{ top }}
      onFocus={focusHandler}
      onBlur={blurHandler}
      tabIndex={0}
    >
      {/* prettier-ignore */}
      <div className={clx(css.card, border, (isFoucs || isUpFocus) && css.card_focus, !deepIndex && css.card__first)}>
        <span className={clx(css.card__title, css.card__title_top)}>{currCard.title}</span>
        <span className={clx(css.card__title, css.card__title_center)}>{currCard.title}</span>
        <span className={clx(css.card__title, css.card__title_bottom)}>{currCard.title}</span>
      </div>
      {bottomCards.length > 1 && (
        <Card
          deepIndex={deepIndex + 1}
          index={index}
          isUpFocus={isFoucs || isUpFocus}
          bottomCards={bottomCards.slice(1)}
        />
      )}
    </div>
  );
};

export default Card;
