import { DndContext } from "@dnd-kit/core";
import React, { FC } from "react";
import Grid from "../Grid/Grid";
import Nav from "../Nav/Nav";

const App: FC = () => {
  return (
    <main>
      <Nav />
      <Grid />
    </main>
  );
};

export default App;
