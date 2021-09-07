import { GetServerSidePropsContext } from "next";
import { axios } from "../axios";

export const getMyPostsSsr = async (ctx: GetServerSidePropsContext) => {
  const token = ctx.req.cookies.accessToken;

  if (token) {
    try {
      const { data } = await axios("https://next-blog-blond-eight.vercel.app/api/my-posts", {
        headers: { authorization: token },
      });

      return { props: { posts: data } };
    } catch (error) {
      console.log(error);
    }
  }
  return {
    props: {},
  };
};
