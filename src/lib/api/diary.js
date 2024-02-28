import axios from "axios";

export const api_query = (data) => axios.post(`diary/query`, data);
