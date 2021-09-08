import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { authReducers } from "./ducks/auth/reducers";

let store = initStore();
export type RootState = ReturnType<typeof store.getState>;

function initStore(preloadedState?: any) {
  return configureStore({
    reducer: {
      auth: authReducers,
    },
    preloadedState,
  });
}

export const initializeStore = (preloadedState?: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(preloadedState?: any) {
  const store = useMemo(
    () => initializeStore(preloadedState),
    [preloadedState]
  );
  return store;
}

export type StoreType = typeof store;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
