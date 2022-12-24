import { Html, Head, Main, NextScript } from "next/document";
import Toasts from "../components/Toasts/Toasts";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Задача пасьянс для конкурса КИО. Соберите свой пасьянс 'Паук' за минимальное количество ходов"
        />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <div id="toasts" />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
