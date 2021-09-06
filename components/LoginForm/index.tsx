import { useRouter } from "next/dist/client/router";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import styles from "./styles.module.scss";
import { loginThunk } from "../../store/ducks/auth/thunks";
export type LoginData = {
  email: string;
  password: string;
};

export const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onSubmit = (data: LoginData) => {
    dispatch(loginThunk(data))
      .then(() => router.push("/"))
      .catch(console.log);
  };
  return (
    <form data-testid="login_form" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register("email")} type="text" placeholder="Email" />
      <input {...register("password")} type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};
