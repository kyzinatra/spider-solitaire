import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { auth } from "../../../firebase.config";
import { useAppDispatch } from "../../services";
import { setUser } from "../../services/slices/user";
import Toasts from "../Toasts/Toasts";

interface ILayout {
  title?: string;
  onlyAuth?: boolean;
  onlyАnonym?: boolean;
}

export const Layout: FC<PropsWithChildren<ILayout>> = ({ children, title, onlyAuth, onlyАnonym }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isAuth, setAuth] = useState<undefined | boolean>();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setAuth(!!user?.uid);
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

  let renderItem: React.ReactNode | undefined;

  if (onlyAuth) {
    if (isAuth === false) router.push("/");
    if (isAuth === true) renderItem = children;
  }

  if (onlyАnonym) {
    if (isAuth === true) router.push("/");
    if (isAuth === false) renderItem = children;
  }

  if (!onlyAuth && !onlyАnonym) renderItem = children;

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
      {renderItem}
      <Toasts />
    </>
  );
};
