import { useRouter } from "next/dist/client/router";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/ducks/auth/selectors";

const navLinks = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/my-posts",
    label: "My Posts",
  },
];

export const Header = () => {
  const router = useRouter();
  const user = useAppSelector(selectUser);
  return (
    <header data-testid="header" className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li
              className={clsx(
                styles.link,
                router.asPath === link.route && styles.activeLink
              )}
              key={link.route}
            >
              <Link passHref href={link.route}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {user ? (
        <Link passHref href="/profile">
          <a
            className={clsx(
              styles.link,
              router.asPath === "/profile" && styles.activeLink
            )}
          >
            Profile
          </a>
        </Link>
      ) : (
        <div className={styles.authLinks__container}>
          <Link passHref href="/login">
            <a className={styles.link}>Login</a>
          </Link>
          <Link passHref href="/register">
            <a className={styles.link}>Create account</a>
          </Link>
        </div>
      )}
    </header>
  );
};
