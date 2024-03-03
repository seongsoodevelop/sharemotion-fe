import styled from "styled-components";
import { shadowCSS } from "@lib/styleUtils";
import { DiaryTagSelect, DiaryTextArea } from "./";
import { DiaryButton } from ".";
import { useDispatch, useSelector } from "react-redux";
import { diarySelector, updateForm } from "@redux/modules/diary";

const DiaryWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: none;
  ${shadowCSS}

  border-radius: 0.4rem;

  user-select: none;
`;

export default function DiaryWrite({ submitCallback }) {
  const dispatch = useDispatch();
  const diary = useSelector(diarySelector);
  const formTag = diary.form.tag_string;
  const formText = diary.form.content;

  return (
    <DiaryWrapper>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1rem",
          borderTopLeftRadius: "0.4rem",
          borderTopRightRadius: "0.4rem",
          background: "white",
        }}
      >
        <DiaryTagSelect
          tag_string={formTag.trim()}
          callback={(tag) => {
            let str = formTag;
            const arr = str.trim().split(" ");
            if (arr.length >= 5) {
              alert("태그는 최대 5개까지만 추가하실 수 있어요.");
              return;
            }
            if (arr.findIndex((o) => o === `#${tag}`) !== -1) return;
            arr.push(`#${tag}`);
            const res = arr.join(" ");
            dispatch(updateForm({ ...diary.form, tag_string: res }));
          }}
          callbackRemove={(index) => {
            let str = formTag;
            const arr = str.trim().split(" ");
            arr.splice(index, 1);
            const res = arr.join(" ");
            dispatch(updateForm({ ...diary.form, tag_string: res }));
          }}
        />
        <div
          style={{
            width: "100%",
            padding: "0 1em",
            paddingTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <DiaryTextArea
            placeholder="오늘 있었던 일에 대해 이야기해 주세요"
            value={formText}
            onChange={(e) => {
              dispatch(
                updateForm({ ...diary.form, content: e.currentTarget.value })
              );
            }}
            maxLength={399}
          />
        </div>
      </div>
      <DiaryButton
        style={{
          borderRadius: "0.4rem",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        onClick={() => {
          submitCallback(formTag.trim(), formText.trim());
        }}
      >
        게시하기 ({`${formText.length}자 / 400자`})
      </DiaryButton>
    </DiaryWrapper>
  );
}
