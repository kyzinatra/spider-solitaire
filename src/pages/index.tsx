import React from "react";
import Grid from "../components/Grid/Grid";
import Layout from "../components/Layout/Layout";
import Nav from "../components/Nav/Nav";

const Index = () => {
  return (
    <Layout>
      <header>
        <Nav />
      </header>
      <main>
        <Grid />
      </main>
    </Layout>
  );
};

export default Index;
