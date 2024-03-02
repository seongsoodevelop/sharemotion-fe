import * as axiosPlus from "@lib/axiosPlus";

export const api_query = (data) => axiosPlus.postWithToken(`diary/query`, data);
export const api_insert = (data) =>
  axiosPlus.postWithToken(`diary/insert`, data);
export const api_update_content = (data) =>
  axiosPlus.postWithToken(`diary/update_content`, data);
export const api_getUser = (data) =>
  axiosPlus.postWithToken(`diary/getUser`, data);

export const api_getUserLoved = (data) =>
  axiosPlus.postWithToken(`diary/getUserLoved`, data);
export const update_love = (data) =>
  axiosPlus.postWithToken(`diary/update_love`, data);
