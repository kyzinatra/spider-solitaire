import React, { FC } from "react";
import { clx } from "../../../utils/clx";
import css from "./EmptyCard.module.css";

interface IEmptyCard {
  forwardRef?: React.ForwardedRef<any>;
  isOver?: boolean;
}

const EmptyCardComponent: FC<IEmptyCard> = ({ forwardRef, isOver }) => {
  return <div className={clx(css.empty, isOver && css.empty__over)} ref={forwardRef} />;
};

export const EmptyCard = React.forwardRef<HTMLDivElement, IEmptyCard>((props, ref) => (
  <EmptyCardComponent {...props} forwardRef={ref} />
));
