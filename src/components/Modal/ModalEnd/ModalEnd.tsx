import React, { useState } from "react";
import { LOCAL_CARDS } from "../../../constants/card";
import { ImportAync } from "../../../hooks/useEffetchWithImports";
import { useToast } from "../../../hooks/useToast";
import { TSimpleResponse } from "../../../pages/api/maps/set";
import { useAppDispatch, useAppSelector } from "../../../services";
import { closeModal } from "../../../services/slices/cards";
import { TGrid } from "../../../types/card";
import { postFetch } from "../../../utils/fetchAPI";
import { Button } from "../../Form/Button/Button";
import css from "./ModalEnd.module.css";

export const ModalEnd = () => {
  const { length, drops, steps } = useAppSelector(s => s.cards.stats);
  const dispatch = useAppDispatch();
  const addToast = useToast();
  const [isLoading, setLoading] = useState(false);

  function publishHandler() {
    setLoading(true);
    ImportAync([import("../../../../firebase.config")], async ([{ auth }]) => {
      const token = await auth.currentUser?.getIdToken(true);
      const cards = JSON.parse(localStorage.getItem(LOCAL_CARDS) || "[]") as TGrid;
      const res = await postFetch(
        "/api/maps/set",
        {
          stats: { length, drops, steps },
          cards,
        },
        token
      );
      const response = (await res.json()) as TSimpleResponse;
      addToast(response.message, response.success ? "success" : "error");
      if (response.success) dispatch(closeModal());
    }).finally(() => setLoading(false));
  }

  return (
    <section className={css.article}>
      <h1 className={css.article__title}>Поздравляем!</h1>
      <h2 className={css.article__subtitle}>Вы прошли игру!</h2>
      <h3 className={css.article__stats}>Статистика:</h3>
      <ul className={css.article__list}>
        <li>Длина: {length}</li>
        <li>Шаги: {steps}</li>
        <li>Сбросы: {drops}</li>
      </ul>
      <Button styleType="button" className={css.article__button} onClick={publishHandler} disabled={isLoading}>
        Опубликовать
      </Button>
    </section>
  );
};
