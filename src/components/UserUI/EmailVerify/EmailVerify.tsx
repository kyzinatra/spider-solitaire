import { sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth } from "../../../../firebase.config";
import { useToast } from "../../../hooks/useToast";
import { useAppSelector } from "../../../services";
import { Button } from "../../Form/Button/Button";

import css from "./EmailVerify.module.css";

export const EmailVerify = () => {
  const isVerify = useAppSelector(s => s.user.isEmailVerified);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const addToast = useToast();
  function sendMail() {
    const user = auth.currentUser;
    if (!user) return router.push("/login");
    setLoading(true);

    sendEmailVerification(user)
      .then(
        () => addToast("Письмо отправлено!", "success"),
        e => addToast(e.code, "error")
      )
      .finally(() => setLoading(false));
  }

  if (isVerify) return null;
  return (
    <>
      <li>
        <Button styleType="button" onClick={sendMail} disabled={isLoading}>
          {isLoading ? "Отправляем..." : "Отправить письмо"}
        </Button>
      </li>
      <li className={css.email}>Почта не подтверждена!</li>
    </>
  );
};
