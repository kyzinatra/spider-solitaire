import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren<{ title?: string }>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Задача "Пасьянс"'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Задача пасьянс для конкурса КИО. Соберите свой пасьянс 'Паук' за минимальное количество ходов"
        />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      {children}
    </>
  );
};
