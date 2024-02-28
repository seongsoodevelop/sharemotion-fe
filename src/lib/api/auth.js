import axios from "axios";

export const api_login = (data) =>
  axios.post(`auth/login`, data, { withCredentials: true });
