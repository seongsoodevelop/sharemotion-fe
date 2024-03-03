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

export const diary_insert = createAPICallAction(
  `${name}/diary_insert`,
  DiaryAPI.api_insert
);

export const diary_update_content = createAPICallAction(
  `${name}/diary_update_content`,
  DiaryAPI.api_update_content
);

export const diary_getUser = createAPICallAction(
  `${name}/diary_getUser`,
  DiaryAPI.api_getUser
);

export const diary_getUserLoved = createAPICallAction(
  `${name}/diary_getUserLoved`,
  DiaryAPI.api_getUserLoved
);

export const diary_update_love = createAPICallAction(
  `${name}/diary_update_love`,
  DiaryAPI.update_love
);

// initial state

const initialState = {
  onPending: false,
  data: [],
  data_loved: [],
  form: {
    content: "",
    tag_string: "",
  },
};

// slice
export const slice = createSlice({
  name,
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.form = action.payload;
    },
  },
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
        rejected: (state, action) => {
          alert(action.payload);
        },
      },
      {
        handleOnPending: true,
      }
    );

    addAPICallActionCase(
      builder,
      diary_update_content,
      {
        fulfilled: (state, action) => {
          alert("성공적으로 수정되었습니다.");

          const data = state.data.slice();
          const index = data.findIndex((o) => o.id === action.payload.id);
          data[index] = { ...data[index], content: action.payload.content };

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

    addAPICallActionCase(
      builder,
      diary_update_love,
      {
        fulfilled: (state, action) => {
          let arr = [];
          if (action.payload.loved) {
            arr = state.data_loved.slice();
            arr.push({
              auth_id: action.payload.auth_id,
              diary_id: action.payload.diary_id,
            });
          } else {
            arr = state.data_loved.filter(
              (x) => x.diary_id !== action.payload.diary_id
            );
          }
          state.data_loved = arr;
        },
      },
      {
        handleOnPending: true,
      }
    );

    addAPICallActionCase(
      builder,
      diary_getUserLoved,
      {
        rejected: (state, action) => {
          state.data_loved = [];
        },
        fulfilled: (state, action) => {
          const res = action.payload;
          state.data_loved = res;
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
export const { updateForm } = slice.actions;

// selectors
export const diarySelector = (state) => state.diary;
