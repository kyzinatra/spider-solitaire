import React from "react";
import { LoginForm } from "../../components/Form/LoginForm/LoginForm";
import { Layout } from "../../components/Layout/Layout";

import css from "./login.module.css";

function Login() {
  return (
    <Layout title="Вход" onlyАnonym>
      <main className={css.login}>
        <LoginForm />
      </main>
    </Layout>
  );
}

export default Login;
