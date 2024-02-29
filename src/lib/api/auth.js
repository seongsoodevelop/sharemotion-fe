import * as axiosPlus from "@lib/axiosPlus";

export const api_login = (data) => axiosPlus.postWithToken(`auth/login`, data);
