import { NextApiRequest } from "next";
import { IUser } from "./store/ducks/auth/types";

export type ErrorResponse = {
  error: string;
};

export type NextApiRequestWithUser = {
  user: IUser;
} & NextApiRequest;
