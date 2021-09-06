import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { PostsList } from "../../components/PostsList";
import { IPost } from "../../store/ducks/auth/types";
import { createGetServerSideProps } from "../../utils/createGetServerSideProps";
import { getMyPostsSsr } from "../../utils/getMyPostsSsr";
import { getUserSsr } from "../../utils/getUserSsr";
import styles from "./styles.module.scss";

type MyPostsProps = {
  posts: IPost[];
};

const MyPosts: NextPage<MyPostsProps> = ({ posts }) => {
  return (
    <Layout>
      <div className={styles.btns_container}>
        <Link href="/create">
          <a className={styles.create}>Create Post</a>
        </Link>
      </div>
      <PostsList posts={posts} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = createGetServerSideProps([
  getUserSsr(true),
  getMyPostsSsr,
]);

export default MyPosts;
