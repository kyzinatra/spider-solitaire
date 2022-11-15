import React from "react";

import type { AppProps } from "next/app";

import "../styles/normalize.css";
import "../styles/index.css";

import { store } from "../services";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
