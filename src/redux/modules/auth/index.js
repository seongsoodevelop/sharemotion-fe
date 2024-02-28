import { createSlice } from "@reduxjs/toolkit";
import * as AuthAPI from "@lib/api/auth";
import { addAPICallActionCase, createAPICallAction } from "@lib/reduxtools";
import storage from "@lib/storage";

// name
const name = "auth";

// extra actions

export const auth_login = createAPICallAction(
  `${name}/login`,
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
          state.loggedInfo = { profile: action.payload };
          storage.set("loggedInfo", { profile: action.payload });

          if (window.location.pathname === "/auth/login") {
            window.location.pathname = "/";
          }
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
