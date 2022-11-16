import React from "react";
import { Grid } from "../components/Grid/Grid";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Nav/Nav";
import { Stats } from "../components/Stats/Stats";

import css from "./index.module.css";

export default function Index() {
  return (
    <Layout>
      <header className={css.header}>
        <Stats />
        <Nav />
      </header>
      <main>
        <Grid />
      </main>
    </Layout>
  );
}
