import { useRouter } from "next/router";
import React, { FormEvent, FC, useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import Image from "next/image";
import Link from "next/link";

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import css from "./LoginForm.module.css";
import { ILoginForm } from "../../../types/user";
import { auth } from "../../../../firebase.config";
import { useSingInWithProvider } from "../../../hooks/useSingInWithProvider";
import { NOT_FOUND } from "../../../constants/auth";
import { LoginError } from "../../../types/errors";

export const LoginForm: FC = ({}) => {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<ILoginForm>({ password: "", email: "" });

  const GoogleSingIn = useSingInWithProvider(new GoogleAuthProvider());
  const GitHubSingIn = useSingInWithProvider(new GithubAuthProvider());

  useEffect(() => {
    router.prefetch("/");
  }, []);

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    const { email, password } = loginForm;

    signInWithEmailAndPassword(auth, email, password)
      .catch((e: LoginError) => {
        if (e.code.includes(NOT_FOUND)) {
          return createUserWithEmailAndPassword(auth, email, password);
        }
      })
      .then(() => router.push("/"))
      .catch(e => {});
  }

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <fieldset className={css.form__login}>
        <legend className={css.form__title}>Форма входа/регистрации в аккаунт:</legend>
        <Input
          placeholder="Почта"
          type="email"
          value={loginForm.email}
          onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
        />
        <Input
          placeholder="Пароль"
          type="password"
          value={loginForm.password}
          onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
        />
        <Link href="/reset-password" className={css.form__reset}>
          Восстановить пароль
        </Link>
      </fieldset>
      <div className={css.form__buttons}>
        <Button styleType="button" type="submit">
          Войти
        </Button>
      </div>
      <div className={css.form__providers}>
        <Button styleType="invs" type="button" onClick={GoogleSingIn}>
          <Image src="/google.webp" width="60" height="60" alt="Google login" />
        </Button>
        <Button styleType="invs" type="button" onClick={GitHubSingIn}>
          <Image src="/github.webp" width="60" height="60" alt="Github login" />
        </Button>
      </div>
    </form>
  );
};