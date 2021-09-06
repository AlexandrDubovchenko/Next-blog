import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../store/ducks/auth/selectors";
import { getMeThunk } from "../../store/ducks/auth/thunks";
import { useAppDispatch } from "../../store/hooks";
import { Header } from "./Header";
import styles from "./styles.module.scss";

export const Layout: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
