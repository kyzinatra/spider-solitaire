import React, { FC } from "react";
import { clx } from "../../../utils/clx";
import css from "./EmptyCard.module.css";

interface IEmptyCard {
  forwardRef?: React.ForwardedRef<any>;
  isOver?: boolean;
}

const EmptyCard: FC<IEmptyCard> = ({ forwardRef, isOver }) => {
  return <div className={clx(css.empty, isOver && css.empty__over)} ref={forwardRef} />;
};

export default React.forwardRef<HTMLDivElement, IEmptyCard>((props, ref) => <EmptyCard {...props} forwardRef={ref} />);
