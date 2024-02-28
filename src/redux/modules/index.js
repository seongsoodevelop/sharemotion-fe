import { combineReducers } from "redux";
import auth from "./auth";
import diary from "./diary";

const root = combineReducers({
  auth,
  diary,
});

export default root;
