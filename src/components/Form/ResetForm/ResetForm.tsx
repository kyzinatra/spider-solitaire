import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

import css from "../Form.module.css";
import { useToast } from "../../../hooks/useToast";
import { ImportAync } from "../../../hooks/useEffetchWithImports";

export const ResetForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const addToast = useToast();
  useEffect(() => {
    router.prefetch("/login");
  });

  function submitHandler(e: FormEvent) {
    setLoading(true);
    e.preventDefault();
    ImportAync(
      [import("firebase/auth"), import("../../../../firebase.config")],
      ([{ sendPasswordResetEmail }, { auth }]) => {
        sendPasswordResetEmail(auth, email)
          .then(
            () => addToast("Письмо отправлено!", "success"),
            e => addToast(e.code, "error")
          )
          .finally(() => setLoading(false));
      }
    );
  }

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <fieldset className={css.form__login}>
        <legend className={css.form__title}>Форма восстановления пароля:</legend>
        <Input
          placeholder="Почта"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Link href="/login" className={css.form__reset}>
          Вернуться к странице входа
        </Link>
      </fieldset>
      <div className={css.form__buttons}>
        <Button styleType="button" type="submit" disabled={isLoading}>
          {isLoading ? "Отправляем..." : "Отправить письмо"}
        </Button>
      </div>
    </form>
  );
};
