import { useRouter } from "next/dist/client/router";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import styles from "./styles.module.scss";
import { registerThunk } from "../../store/ducks/auth/thunks";
export type LoginData = {
  email: string;
  password: string;
};

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginData>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onSubmit = (data: LoginData) => {
    setLoading(true);
    dispatch(registerThunk(data))
      .then(() => router.push("/"))
      .catch(console.log)
      .finally(() => setLoading(false));
  };
  return (
    <form
      data-testid="register_form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <input
        {...register("email")}
        type="text"
        placeholder="Email"
      />
      <input
        {...register("password")}
        type="text"
        placeholder="Password"
      />
      <button type="submit">
        Create Account
      </button>
      {loading && <p style={{ marginTop: 30 }}>Loading...</p>}
    </form>
  );
};
