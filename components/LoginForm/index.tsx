import { useRouter } from "next/dist/client/router";
import React, { FC, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onSubmit = (data: LoginData) => {
    setLoading(true);
    dispatch(loginThunk(data))
      .then(() => router.push("/"))
      .catch(console.log)
      .finally(() => setLoading(false));
  };
  return (
    <form
      data-testid="login_form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <input {...register("email")} type="text" placeholder="Emailllll" />
      <input {...register("password")} type="text" placeholder="Password" />
      <button type="submit">Login</button>
      {loading && <p style={{ marginTop: 30 }}>Loading...</p>}
    </form>
  );
};
