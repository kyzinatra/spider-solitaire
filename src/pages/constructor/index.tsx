import { DragOverlay } from "@dnd-kit/core";
import React, { useEffect } from "react";
import { CardWrapper } from "../../components/Card/CardWrapper/CardWrapper";
import { Constructor } from "../../components/Constructor/Constructor";
import { Grid } from "../../components/Grid/Grid";
import Context from "../../components/Layout/Context";
import { Layout } from "../../components/Layout/Layout";
import { Nav } from "../../components/Nav/Nav";
import { CARD_VALUES } from "../../constants/card";
import { useAppDispatch, useAppSelector } from "../../services";
import { setCards, setDragMode } from "../../services/slices/cards";
import { TGrid } from "../../types/card";
import css from "./constructor.module.css";
import { useState } from "react";
import { getNewConstructorCards } from "../../utils/getNewCards";
import { ConstructorNav } from "../../components/Constructor/ConstructorNav/ConstructorNav";

function ConstructorPage() {
  const dispatch = useAppDispatch();
  const { dragId, dragCards } = useAppSelector(s => s.cards);
  const [allCards, setAllCards] = useState<TGrid>(getNewConstructorCards());
  const cards = useAppSelector(s => s.cards.cards);

  useEffect(() => {
    if (dragId === null) setAllCards(getNewConstructorCards());
  }, [dragId]);

  useEffect(() => {
    dispatch(setDragMode(true));
    dispatch(setCards([]));
  }, [dispatch]);

  return (
    <Layout title="Конструктор" onlyAuth>
      <header className={css.header}>
        <ConstructorNav />
        <Nav />
      </header>
      <main className={css.main}>
        <Context cards={[...(cards || []), ...allCards]}>
          <Constructor cards={allCards} />
          <Grid />
          <DragOverlay>
            {dragCards && <CardWrapper isUpFocus index={0} cell={dragCards} />}
          </DragOverlay>
        </Context>
      </main>
    </Layout>
  );
}

export default ConstructorPage;
