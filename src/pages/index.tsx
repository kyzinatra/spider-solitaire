import React, { useEffect } from "react";

import { DragOverlay } from "@dnd-kit/core";

import { CardWrapper } from "../components/Card/CardWrapper/CardWrapper";
import { Grid } from "../components/Grid/Grid";
import Context from "../components/Layout/Context";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Nav/Nav";
import { Stats } from "../components/Stats/Stats";

import { useAppDispatch, useAppSelector } from "../services";
import {
  setCards,
  setDragMode,
  setStats,
  setSnapshots,
  closeModal,
} from "../services/slices/cards";

import css from "./index.module.css";
import { LOCAL_CARDS } from "../constants/card";
import { Modal } from "../components/Modal/Modal";
import { ModalEnd } from "../components/Modal/ModalEnd/ModalEnd";

export default function Index() {
  const dispatch = useAppDispatch();
  const { cards, dragCards, isShowEndModal } = useAppSelector(s => s.cards);
  useEffect(() => {
    dispatch(setDragMode(false));
    //? Reset cards to locals variant
    // TODO we must check on server is this correct cards moving and the same combination as a original there (if this is not cards from constructor)!!
    dispatch(setCards(JSON.parse(localStorage.getItem(LOCAL_CARDS) || "[]")));
    dispatch(setStats({ length: 0, steps: 0, drops: 0 }));
    dispatch(setSnapshots([]));
  }, [dispatch]);

  return (
    <Layout>
      <header className={css.header}>
        <Stats />
        <Nav />
      </header>
      <main className={css.main}>
        <Context cards={cards}>
          <Grid />
          <DragOverlay>
            {dragCards && <CardWrapper isUpFocus index={0} cell={dragCards} />}
          </DragOverlay>
        </Context>
      </main>
      <Modal
        open={isShowEndModal}
        onClose={() => {
          dispatch(closeModal());
        }}
      >
        <ModalEnd />
      </Modal>
    </Layout>
  );
}
