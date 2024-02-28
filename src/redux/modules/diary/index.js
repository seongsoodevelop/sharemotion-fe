import { createSlice } from "@reduxjs/toolkit";
import * as DiaryAPI from "@lib/api/diary";
import { addAPICallActionCase, createAPICallAction } from "@lib/reduxtools";

// name
const name = "diary";

// extra actions

export const diary_query = createAPICallAction(
  `${name}/diary_query`,
  DiaryAPI.api_query
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
          state.isLogged = true;
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
  },
});

// reducer export
export default slice.reducer;

// actions
// export const {  } = slice.actions;

// selectors
export const diarySelector = (state) => state.diary;
