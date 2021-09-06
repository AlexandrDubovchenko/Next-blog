import { GetServerSidePropsContext } from "next";
import { axios } from "../axios";

export const getPostsSsr = async (ctx: GetServerSidePropsContext) => {
  try {
    const { data } = await axios("/posts");
    return { props: { posts: data } };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {},
  };
};
