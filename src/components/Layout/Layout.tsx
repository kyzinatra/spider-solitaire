import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import React, { FC, PropsWithChildren, useEffect } from "react";
import { auth } from "../../../firebase.config";
import { useAppDispatch } from "../../services";
import { setUser } from "../../services/slices/user";
import Toasts from "../Toasts/Toasts";

export const Layout: FC<PropsWithChildren<{ title?: string }>> = ({ children, title }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      dispatch(
        setUser({
          email: user?.email,
          isAuth: !!user?.uid,
          uid: user?.uid,
          isEmailVerified: user?.emailVerified,
          provider: user?.providerId,
          creationTime: user?.metadata.creationTime,
          lastSingInTime: user?.metadata.lastSignInTime,
        })
      );
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title || 'Задача "Пасьянс"'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Задача пасьянс для конкурса КИО. Соберите свой пасьянс 'Паук' за минимальное количество ходов"
        />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      {children}
      <Toasts />
    </>
  );
};
