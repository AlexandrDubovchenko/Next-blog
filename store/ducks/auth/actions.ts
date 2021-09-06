import { createAction } from "@reduxjs/toolkit";
import { AuthActionTypes, IUser } from "./types";

export const setUser = createAction<IUser>(AuthActionTypes.SET_USER)
export const logout = createAction(AuthActionTypes.LOGOUT)