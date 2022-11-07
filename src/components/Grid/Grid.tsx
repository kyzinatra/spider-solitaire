import React, { FC } from "react";
import CardWrapper from "../Card/CardWrapper/CardWrapper";
import { TCell } from "../../types/card";
import css from "./Grid.module.css";

// prettier-ignore
const mock = [
  [{ title: "A"},{ title: "K"},{ title: "Q"},{ title: "V"},{ title: "10"},{ title: "9"},{ title: "8"},{ title: "7"},{ title: "5"}, { title: "4"}, { title: "3"}, { title: "2"}], [], [], [{ title: "2"}], [], [],
  [], [], [{title: "7"}], [], [{title: "10"}], [],
  [], [], [{ title: "A"}], [], [], [{ title: "K"}],[], [], [],[], [], []
]

const Grid: FC = () => {
  return (
    <div className={css.grid}>
      {mock.map((cell, i) => (
        <CardWrapper key={i} index={i} cell={cell as TCell} />
      ))}
    </div>
  );
};

export default Grid;
