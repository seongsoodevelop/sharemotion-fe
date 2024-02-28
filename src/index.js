import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "@redux/configureStore.js";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/"
    : "https://confab112.cafe24.com:8000/api/";

axios.defaults.headers.post["Access-Control-Allow-Origin"] =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/"
    : "https://confab112.cafe24.com:8000/";
axios.defaults.headers.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
