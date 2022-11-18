import { DragOverlay } from "@dnd-kit/core";
import React, { useEffect } from "react";
import { CardWrapper } from "../components/Card/CardWrapper/CardWrapper";
import { Grid } from "../components/Grid/Grid";
import Context from "../components/Layout/Context";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Nav/Nav";
import { Stats } from "../components/Stats/Stats";
import { useAppDispatch, useAppSelector } from "../services";
import { setCards, setDragMode } from "../services/slices/cards";

import css from "./index.module.css";

export default function Index() {
  const dispatch = useAppDispatch();
  const { cards, dragCards } = useAppSelector(s => s.cards);

  useEffect(() => {
    dispatch(setDragMode(false));
  }, []);

  return (
    <Layout>
      <header className={css.header}>
        <Stats />
        <Nav />
      </header>
      <main className={css.main}>
        <Context cards={cards}>
          <Grid />
          <DragOverlay>{dragCards && <CardWrapper isUpFocus index={0} cell={dragCards} />}</DragOverlay>
        </Context>
      </main>
    </Layout>
  );
}
