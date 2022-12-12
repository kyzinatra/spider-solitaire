import { updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { auth } from "../../../firebase.config";
import { Button } from "../../components/Form/Button/Button";
import { EditForm } from "../../components/Form/EditForm/EditForm";
import { Input } from "../../components/Form/Input/Input";
import { Layout } from "../../components/Layout/Layout";
import { NavLink } from "../../components/Nav/NavLink/NavLink";
import { EmailVerify } from "../../components/UserUI/EmailVerify/EmailVerify";
import { ImportAync } from "../../hooks/useEffetchWithImports";
import { useToast } from "../../hooks/useToast";
import { useAppSelector } from "../../services";

import css from "./profile.module.css";

const Profile = () => {
  const router = useRouter();
  const addToast = useToast();
  const { email, lastSingInTime } = useAppSelector(s => s.user);

  function logOut() {
    ImportAync([import("firebase/auth"), import("../../../firebase.config")], ([{ signOut }, { auth }]) => {
      signOut(auth).then(
        () => router.push("/"),
        e => addToast(e.code, "error")
      );
    });
  }

  let lastDateFormted: string | undefined;

  if (lastSingInTime)
    lastDateFormted = new Intl.DateTimeFormat("ru", {
      timeStyle: "short",
      dateStyle: "full",
    }).format(new Date(lastSingInTime || ""));

  return (
    <Layout title="Профиль" onlyAuth>
      <nav className={css.nav}>
        <ul className={css.nav__list}>
          <NavLink href="/">На главную</NavLink>

          <EmailVerify />
          <li>
            <Button styleType="button" onClick={logOut}>
              Выйти из аккаунта
            </Button>
          </li>
        </ul>
      </nav>
      <main className={css.main}>
        <section>
          <EditForm />
        </section>
        <section>
          <h1 className={css.main__title}>Здравствуйте, {email}</h1>
          {lastDateFormted && (
            <h2 className={css.main__subtitle}>
              Хорошо, что вы пришли, вы заходили в последний раз в {lastDateFormted}
            </h2>
          )}
        </section>
      </main>
    </Layout>
  );
};

export default Profile;
