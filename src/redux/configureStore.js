import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules";

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
