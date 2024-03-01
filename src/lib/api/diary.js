import * as axiosPlus from "@lib/axiosPlus";

export const api_query = (data) => axiosPlus.postWithToken(`diary/query`, data);
export const api_insert = (data) =>
  axiosPlus.postWithToken(`diary/insert`, data);
export const api_update_content = (data) =>
  axiosPlus.postWithToken(`diary/update_content`, data);
export const api_getUser = (data) =>
  axiosPlus.postWithToken(`diary/getUser`, data);
