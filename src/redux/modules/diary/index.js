import { createSlice } from "@reduxjs/toolkit";
import * as DiaryAPI from "@lib/api/diary";
import { addAPICallActionCase, createAPICallAction } from "@lib/reduxTools.js";

// name
const name = "diary";

// extra actions

export const diary_query = createAPICallAction(
  `${name}/diary_query`,
  DiaryAPI.api_query
);

export const diary_insert = createAPICallAction(
  `${name}/diary_insert`,
  DiaryAPI.api_insert
);

export const diary_getUser = createAPICallAction(
  `${name}/diary_getUser`,
  DiaryAPI.api_getUser
);

// initial state

const initialState = {
  onPending: false,
  data: [],
};

// slice
export const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addAPICallActionCase(
      builder,
      diary_query,
      {
        rejected: (state, action) => {
          state.data = [];
        },
        fulfilled: (state, action) => {
          if (action.meta.arg.page === 1) {
            state.data = action.payload;
          } else {
            const arr = state.data.slice();
            if (action.payload.length === 0) {
              alert("더 읽어들일 게시물이 없어요");
              return;
            }
            const res = arr.concat(action.payload);
            state.data = res;
          }
        },
      },
      {
        handleOnPending: true,
      }
    );

    addAPICallActionCase(
      builder,
      diary_insert,
      {
        fulfilled: (state, action) => {
          alert("성공적으로 게시되었습니다.");

          const o = action.payload;

          const data = state.data.slice();
          data.unshift(o);
          if (data.length > 10) data.pop();

          state.data = data;
        },
      },
      {
        handleOnPending: true,
      }
    );
    addAPICallActionCase(
      builder,
      diary_getUser,
      {
        rejected: (state, action) => {
          state.data = [];
        },
        fulfilled: (state, action) => {
          state.data = action.payload;
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
export const diarySelector = (state) => state.diary;
