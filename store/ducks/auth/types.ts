import { DocumentReference } from "@firebase/firestore";

export interface IPost {
  title: string;
  text: string;
  author: DocumentReference;
}

export enum AuthActionTypes {
  SET_USER = "SET_USER",
  LOGIN = "LOGIN",
  GET_ME = "GET_ME",
  LOGOUT = "LOGOUT",
  REGISTER = "REGISTER",
}

export interface IAuthState {
  token?: string | null;
  user?: IUser | null;
}

export interface IUser {
  id: string;
  email: string;
  posts: Array<DocumentReference<IPost>>;
}
