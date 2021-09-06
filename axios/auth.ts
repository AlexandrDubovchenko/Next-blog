import { AxiosResponse } from "axios";
import { axios } from ".";
import { LoginData } from "../components/LoginForm";
import { IUser } from "../store/ducks/auth/types";

export type AuthResponse = {
  accessToken: string;
};

export const login = async (
  data: LoginData
): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post("/auth/login", data);
};
export const register = async (
  data: LoginData
): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post("/auth/register", data);
};

export const fetchMe = async (): Promise<AxiosResponse<IUser>> => {
  return axios.post("/auth/me");
};
