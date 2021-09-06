import BaseAxios from "axios";
import Cookies from "js-cookie";

export const axios = BaseAxios.create({
  baseURL: "http://localhost:3000//api",
  headers: { Accept: "*/*" },
});

axios.interceptors.request.use((req) => {
  const token = Cookies.get("accessToken");
  if (token) {
    req.headers.Authorization = `${token}`;
  } else if (typeof window !== "undefined") {
    req.headers.Authorization = ``;
  }
  return req;
});
