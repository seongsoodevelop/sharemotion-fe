import styled from "styled-components";
import { shadow } from "@lib/styleUtils";
import DiaryTagSelect from "./DiaryTagSelect";
import { useState } from "react";
import DiaryTextArea from "./DiaryTextArea";
import { DiaryButton } from ".";

const DiaryWrapper = styled.div`
  padding-top: 1rem;

  background: white;

  border-radius: 0.4rem;

  box-shadow: ${shadow};

  user-select: none;
`;

export default function DiaryWrite({ submitCallback }) {
  const [formTag, setFormTag] = useState("");
  const [formText, setFormText] = useState("");

  return (
    <DiaryWrapper>
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
          setFormTag(res);
        }}
        callbackRemove={(index) => {
          let str = formTag;
          const arr = str.trim().split(" ");
          arr.splice(index, 1);
          const res = arr.join(" ");
          setFormTag(res);
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
            setFormText(e.currentTarget.value);
          }}
          maxLength={399}
        />
      </div>
      <DiaryButton
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        onClick={() => {
          if (submitCallback(formTag.trim(), formText.trim())) {
            setFormTag("");
            setFormText("");
          }
        }}
      >
        게시하기 ({`${formText.length}자 / 400자`})
      </DiaryButton>
    </DiaryWrapper>
  );
}
