import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout";
import { logout } from "../store/ducks/auth/actions";
import { selectUser } from "../store/ducks/auth/selectors";
import { useAppDispatch } from "../store/hooks";
import { createGetServerSideProps } from "../utils/createGetServerSideProps";
import { getUserSsr } from "../utils/getUserSsr";

const Profile = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  return (
    <Layout>
      {JSON.stringify(user)}
      <button data-testid="logout_btn" onClick={handleLogout}>Logout</button>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = createGetServerSideProps([
  getUserSsr(true),
]);

export default Profile;
