import React, { FC } from "react";
import { IPost } from "../../store/ducks/auth/types";
import styles from "./styles.module.scss";

export const PostsList: FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <ul data-testid="posts_list" className={styles.root}>
      {!!posts?.length &&
        posts.map((post, index) => (
          <li className={styles.post} key={index}>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.text }} />
          </li>
        ))}
    </ul>
  );
};
