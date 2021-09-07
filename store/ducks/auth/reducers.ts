import { createReducer } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { logout, setUser } from "./actions";
import { getMeThunk, loginThunk, registerThunk } from "./thunks";
import { IAuthState } from "./types";

const initialState: IAuthState = {
  token: Cookies.get("accessToken"),
  user: null,
};

export const authReducers = createReducer(initialState, (builder) =>
  builder
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loginThunk.fulfilled, (state, action) => {      
      state.token = action.payload.accessToken;
    })
    .addCase(registerThunk.fulfilled, (state, action) => {
      state.token = action.payload.accessToken;
    })
    .addCase(getMeThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(logout, (state) => {
      Cookies.remove("accessToken");
      state = initialState;
    })
);
