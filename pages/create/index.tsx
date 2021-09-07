import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import dynamic, { LoaderComponent } from "next/dynamic";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createPost } from "../../axios/posts";
import { Layout } from "../../components/Layout";
import { IPost } from "../../store/ducks/auth/types";
import { createGetServerSideProps } from "../../utils/createGetServerSideProps";
import { getUserSsr } from "../../utils/getUserSsr";
import styles from "./styles.module.scss";

const Editor = dynamic(
  //@ts-ignore
  () => import("../../components/Editor/index").then((m) => m.Editor),
  { ssr: false }
);

const Create = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<Omit<IPost, "author">>();
  const onSubmit = (data: Omit<IPost, "author">) => {
    createPost(data).then(() => router.push("/my-posts"));
  };
  return (
    <Layout>
      <form data-testid="create_form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          className={styles.title}
          type="text"
          placeholder="Title"
        />
        <div className={styles.editor}>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <Editor value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
        <button className={styles.createBtn} type="submit">
          Create
        </button>
      </form>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = createGetServerSideProps([
  getUserSsr(true),
]);

export default Create;
