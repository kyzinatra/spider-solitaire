import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../components/Form/Button/Button";
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
    ImportAync(
      [import("firebase/auth"), import("../../../firebase.config")],
      ([{ signOut }, { auth }]) => {
        signOut(auth).then(
          () => router.push("/"),
          e => addToast(e.code, "error")
        );
      }
    );
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
          <li>
            <Button styleType="button" onClick={logOut}>
              Выход
            </Button>
          </li>
          <NavLink href="/">На главную</NavLink>
          <EmailVerify />
        </ul>
      </nav>
      <main className={css.main}>
        <h1 className={css.main__title}>Здравствуйте, {email}</h1>
        {lastDateFormted && (
          <h2 className={css.main__subtitle}>
            Хорошо, что вы пришли, вы заходили в последний раз в {lastDateFormted}
          </h2>
        )}
      </main>
    </Layout>
  );
};

export default Profile;
