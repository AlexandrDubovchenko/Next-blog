import { createAction } from "@reduxjs/toolkit";
import { AuthActionTypes } from "./types";

export const logout = createAction(AuthActionTypes.LOGOUT)