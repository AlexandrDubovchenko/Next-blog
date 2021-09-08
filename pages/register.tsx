import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Layout } from "../components/Layout";
import { RegisterForm } from "../components/RegisterForm";
import { getUserSsr } from "../utils/getUserSsr";

const Register: NextPage = () => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userData = await getUserSsr()(ctx);
  
  if (userData.props?.initialReduxState?.auth.user) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return { props: {} };
};

export default Register;
