import { useDroppable } from "@dnd-kit/core";
import React, { FC } from "react";
import { clx } from "../../../utils/clx";
import css from "./EmptyCard.module.css";

type TAttrinutes = {
  isOver?: boolean;
};
interface IEmptyCard extends TAttrinutes {
  forwardRef: React.ForwardedRef<any>;
}

const EmptyCard: FC<IEmptyCard> = ({ forwardRef, isOver }) => {
  return <div className={clx(css.empty, isOver && css.empty__over)} ref={forwardRef}></div>;
};

export default React.forwardRef((props: TAttrinutes, ref) => <EmptyCard {...props} forwardRef={ref} />);
