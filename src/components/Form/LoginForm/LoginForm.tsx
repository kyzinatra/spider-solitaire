import { useRouter } from "next/router";
import React, { FormEvent, FC, useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import Image from "next/image";
import Link from "next/link";

import css from "../Form.module.css";

import { ILoginForm } from "../../../types/user";
import { LoginError } from "../../../types/errors";

import { GITHUB_PROVIDER, GOOGLE_PROVIDER, NOT_FOUND } from "../../../constants/auth";
import { useToast } from "../../../hooks/useToast";
import { ImportAync } from "../../../hooks/useEffetchWithImports";

export const LoginForm: FC = ({}) => {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<ILoginForm>({ password: "", email: "" });
  const [isLoading, setLoading] = useState(false);
  const addToast = useToast();

  useEffect(() => {
    router.prefetch("/");
  }, [router]);

  function providerHandler(type: typeof GITHUB_PROVIDER | typeof GOOGLE_PROVIDER) {
    //? Import libs and emmit handler
    ImportAync(
      [import("firebase/auth"), import("../../../../firebase.config")],
      ([{ signInWithPopup, GoogleAuthProvider, GithubAuthProvider }, { auth }]) => {
        const providers = {
          [GITHUB_PROVIDER]: new GithubAuthProvider(),
          [GOOGLE_PROVIDER]: new GoogleAuthProvider(),
        };

        signInWithPopup(auth, providers[type])
          .then(res => {
            router.push("/");
          })
          .catch(e => addToast(e.code, "error"));
      }
    );
  }

  function submitHandler(e: FormEvent) {
    setLoading(true);
    e.preventDefault();
    const { email, password } = loginForm;
    ImportAync(
      [import("firebase/auth"), import("../../../../firebase.config")],
      ([{ signInWithEmailAndPassword, createUserWithEmailAndPassword }, { auth }]) => {
        signInWithEmailAndPassword(auth, email, password)
          .catch((e: LoginError) => {
            if (e.code.includes(NOT_FOUND)) {
              return createUserWithEmailAndPassword(auth, email, password);
            }
            throw Error(e.code);
          })
          .then(() => router.push("/"))
          .catch(e => {
            addToast(e.message, "error");
            setLoginForm(f => ({ ...f, password: "" }));
          })
          .finally(() => setLoading(false));
      }
    );
  }

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <fieldset className={css.form__login}>
        <legend className={css.form__title}>Форма входа/регистрации в аккаунт:</legend>
        <Input
          placeholder="Почта"
          type="email"
          required
          value={loginForm.email}
          onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
        />
        <Input
          placeholder="Пароль"
          type="password"
          required
          value={loginForm.password}
          onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
        />
        <Link href="/reset-password" className={css.form__reset}>
          Восстановить пароль
        </Link>
      </fieldset>
      <div className={css.form__buttons}>
        <Button styleType="button" type="submit" disabled={isLoading}>
          {isLoading ? "Входим..." : "Войти"}
        </Button>
      </div>
      <div className={css.form__providers}>
        <Button styleType="invs" type="button" onClick={() => providerHandler(GOOGLE_PROVIDER)}>
          <Image src="/google.svg" width="40" height="40" alt="Google login" />
        </Button>
        <Button styleType="invs" type="button" onClick={() => providerHandler(GITHUB_PROVIDER)}>
          <Image src="/github.svg" width="40" height="40" alt="Github login" />
        </Button>
      </div>
    </form>
  );
};
