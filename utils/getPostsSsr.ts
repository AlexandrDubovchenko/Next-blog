import { GetServerSidePropsContext } from "next";
import { axios } from "../axios";

export const getPostsSsr = async () => {
  try {
    const { data } = await axios("/posts");
    return { props: { posts: data } };
  } catch (error) {
      //@ts-ignore
    console.log(error.message);
    return {
      //@ts-ignore
      props: { error: error.message },
    };
  }
};
