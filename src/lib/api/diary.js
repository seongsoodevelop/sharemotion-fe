import axios from "axios";

export const api_query = (data) => axios.post(`diary/query`, data);
export const api_insert = (data) =>
  axios.post(`diary/insert`, data, { withCredentials: true });
