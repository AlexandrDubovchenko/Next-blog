import { axios } from ".";
import { IPost } from "../store/ducks/auth/types";

export const createPost = (data: Omit<IPost, "author">) => {
  return axios.post("/posts/create", data);
};
