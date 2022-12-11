import React from "react";
import css from "./ModalEnd.module.css";

export const ModalEnd = () => {
  return (
    <section className={css.article}>
      <h1 className={css.article__title}>Позравляем!</h1>
      <h2 className={css.article__subtitle}>Вы прошли пасьянс!</h2>
      <h3 className={css.article__stats}>Статистика:</h3>
      <ul className={css.article__list}>
        <li>Шаги: 1</li>
        <li>Сбросы: 2222</li>
        <li>Сбросы: 2222</li>
      </ul>
    </section>
  );
};
