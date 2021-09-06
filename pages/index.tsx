import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "../components/Layout";
import { PostsList } from "../components/PostsList";
import { IPost } from "../store/ducks/auth/types";
import { createGetServerSideProps } from "../utils/createGetServerSideProps";
import { getPostsSsr } from "../utils/getPostsSsr";
import { getUserSsr } from "../utils/getUserSsr";

type IndexProps = {
  posts: IPost[];
};

const Home: NextPage<IndexProps> = ({ posts }) => {
  return (
    <Layout>
      <PostsList posts={posts} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = createGetServerSideProps([
  getUserSsr(),
  getPostsSsr,
]);

export default Home;
