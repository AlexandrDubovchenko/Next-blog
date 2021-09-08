import { GetServerSidePropsContext } from "next";
import { axios } from "../axios";

export const getUserSsr =
  (isProtected?: boolean) => async (ctx: GetServerSidePropsContext) => {
    const token = ctx.req.cookies.accessToken;

    if (token) {
      try {
        const { data } = await axios("/auth/me", {
          headers: { authorization: token },
        });
        if (!data && isProtected) {
          return {
            redirect: {
              destination: "/login",
              permanent: false,
            },
          };
        }
        return { props: { initialReduxState: { auth: { user: data } } } };
      } catch (error) {
        if (isProtected) {
          return {
            redirect: {
              destination: "/login",
              permanent: false,
            },
          };
        }
      }
    }
    if (isProtected) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return {
      props: {},
    };
  };
