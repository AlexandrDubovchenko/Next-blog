import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMe, login, register } from "../../../axios/auth";
import { LoginData } from "../../../components/LoginForm";
import { AuthActionTypes } from "./types";

export const loginThunk = createAsyncThunk(
  AuthActionTypes.LOGIN,
  async (loginData: LoginData) => {
    const { data } = await login(loginData);
    Cookies.set("accessToken", data.accessToken);
    return data;
  }
);
export const registerThunk = createAsyncThunk(
  AuthActionTypes.REGISTER,
  async (registerData: LoginData) => {
    const { data } = await register(registerData);
    Cookies.set("accessToken", data.accessToken);
    return data;
  }
);
export const getMeThunk = createAsyncThunk(
  AuthActionTypes.GET_ME,
  async () => {
    const { data } = await fetchMe();
    return data;
  }
);
