import api from "./axios.api";
import { handleRequest } from "../handler/api.handler.js";

export const registerUser = (data) =>
  handleRequest(api.post("users/register", data));

export const loginUser = (data) =>
  handleRequest(api.post("users/login", data));

export const checkAccount = () =>
  handleRequest(api.get("users/profile"));

export const logoutUser = () =>
  handleRequest(api.post("users/logout"));