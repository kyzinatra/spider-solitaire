import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import { useEffectWithImports } from "../../hooks/useEffetchWithImports";
import { useAppDispatch } from "../../services";
import { setUser } from "../../services/slices/user";
import Toasts from "../Toasts/Toasts";

interface ILayout {
  title?: string;
  onlyAuth?: boolean;
  onlyAnonym?: boolean;
}

export const Layout: FC<PropsWithChildren<ILayout>> = ({ children, title, onlyAuth, onlyAnonym }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isAuth, setAuth] = useState<undefined | boolean>();
  useEffectWithImports(
    ([{ onAuthStateChanged }, { auth }]) => {
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
            displayName: user?.displayName,
          })
        );
      });
    },
    () => [import("firebase/auth"), import("../../../firebase.config")],
    []
  );

  let renderItem: React.ReactNode | undefined;

  if (onlyAuth) {
    if (isAuth === false) router.push("/");
    if (isAuth === true) renderItem = children;
  }

  if (onlyAnonym) {
    if (isAuth === true) router.push("/");
    if (isAuth === false) renderItem = children;
  }

  if (!onlyAuth && !onlyAnonym) renderItem = children;

  return (
    <>
      <Head>
        <title>{title || 'Задача "Пасьянс"'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {renderItem}
      <Toasts />
    </>
  );
};
