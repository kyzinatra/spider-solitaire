import React from "react";
import { Grid } from "../components/Grid/Grid";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Nav/Nav";
import { Stats } from "../components/Stats/Stats";

import css from "./index.module.css";

import type { GetServerSideProps, GetStaticProps } from "next";
import { app } from "../../admin.config";

export default function Index() {
  return (
    <Layout>
      <header className={css.header}>
        <Nav />
        <Stats />
      </header>
      <main>
        <Grid />
      </main>
    </Layout>
  );
}
