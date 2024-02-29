import axios from "axios";
import storage from "@lib/storage";

export const postWithToken = (path, data) => {
  const loggedInfo = storage.get("loggedInfo");
  if (loggedInfo && loggedInfo.access_token) {
    return axios.post(path, { ...data, access_token: loggedInfo.access_token });
  } else {
    return axios.post(path, data);
  }
};
