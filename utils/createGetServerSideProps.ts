//@ts-nocheck

import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

export const createGetServerSideProps =
  (services: Array<GetServerSideProps>): GetServerSideProps =>
  async (ctx: GetServerSidePropsContext) => {
    const promises = await Promise.all(services.map((s) => s(ctx)));
    const results = promises.reduce(
      (
        acc: GetServerSidePropsResult<{ [key: string]: any }>,
        result: GetServerSidePropsResult<{}>
      ) => {
        if (acc.redirect) {
          return { redirect: acc.redirect };
        }
        if (result.redirect) {
          return {
            redirect: result.redirect,
          };
        }
        return {
          props: { ...acc.props, ...result.props },
        };
      },
      { props: {} }
    );

    return results;
  };
