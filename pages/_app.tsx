import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const props = { ...pageProps };
  if (props.initialReduxState) {
    delete props.initialReduxState;
  }
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default MyApp;
