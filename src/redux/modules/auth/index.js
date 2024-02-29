import { createSlice } from "@reduxjs/toolkit";
import * as AuthAPI from "@lib/api/auth";
import { addAPICallActionCase, createAPICallAction } from "@lib/reduxTools";
import storage from "@lib/storage";

// name
const name = "auth";

// extra actions

export const auth_login = createAPICallAction(
  `${name}/auth_login`,
  AuthAPI.api_login
);

// initial state

const initialState = {
  onPending: false,
  isLogged: false,
  loggedInfo: {},
};

// slice
export const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addAPICallActionCase(
      builder,
      auth_login,
      {
        fulfilled: (state, action) => {
          state.isLogged = true;
          state.loggedInfo = { profile: { ...action.payload.profile } };

          if (window.location.pathname === "/auth/login") {
            storage.set("loggedInfo", {
              profile: { ...action.payload.profile },
              access_token: action.payload.access_token,
            });
            window.location.pathname = "/";
          }
        },
        rejected: (state, action) => {
          storage.remove("loggedInfo");
        },
      },
      {
        handleOnPending: true,
      }
    );
  },
});

// reducer export
export default slice.reducer;

// actions
// export const {  } = slice.actions;

// selectors
export const authSelector = (state) => state.auth;
