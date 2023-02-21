
// REGISTER

import { instance } from "../config/config";
import { requestPath } from "./requestPath";

// AUTH

export const CREATE_USER = (data) => instance.post(requestPath.createUser, data);

export const LOGIN_USER = (data) => instance.post(requestPath.loginUser, data);

// LAYOUT

export const GET_CURRENT_USER = () => instance.get(requestPath.currentUser);