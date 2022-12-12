import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useToast } from "../../../hooks/useToast";
import { useAppSelector } from "../../../services";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import css from "./EditForm.module.css";
import { ImportAync } from "../../../hooks/useEffetchWithImports";

export const EditForm = () => {
  const displayName = useAppSelector(s => s.user.displayName);
  const addToast = useToast();
  const [userName, setUserName] = useState("");
  const [isFromChanged, setChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setUserName(displayName || "");
  }, [displayName]);

  function editUser(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    ImportAync(
      [import("firebase/auth"), import("../../../../firebase.config")],
      async ([{ updateProfile }, { auth }]) => {
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, { displayName: userName });
        } else throw Error("Что-то пошло не так...");
      }
    )
      .then(() => {
        addToast("Профиль обновлен успешно!", "success");
        setChanged(false);
      })
      .catch(e => addToast(e.message, "error"))
      .finally(() => setLoading(false));
  }

  function formHandler(e: ChangeEvent<HTMLInputElement>) {
    setChanged(true);
    setUserName(e.target.value);
  }
  return (
    <form className={css.form} onSubmit={editUser}>
      <h1 className={css.form__title}>Сменить имя пользователя</h1>
      <Input placeholder="Введите новое имя" value={userName} onChange={formHandler} />
      {isFromChanged && (
        <Button styleType="button" type="submit" disabled={isLoading}>
          Сохранить
        </Button>
      )}
    </form>
  );
};
