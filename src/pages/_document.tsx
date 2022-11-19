import { Html, Head, Main, NextScript } from "next/document";
import Toasts from "../components/Toasts/Toasts";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="toasts" />
        <NextScript />
      </body>
    </Html>
  );
}
