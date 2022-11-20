import React from "react";
import { ResetForm } from "../../components/Form/ResetForm/ResetForm";
import { Layout } from "../../components/Layout/Layout";
import { useToast } from "../../hooks/useToast";

import css from "./reset.module.css";

const Reset = () => {
  return (
    <Layout title="Восстановление пароля" onlyАnonym>
      <main className={css.reset}>
        <ResetForm />
      </main>
    </Layout>
  );
};

export default Reset;
