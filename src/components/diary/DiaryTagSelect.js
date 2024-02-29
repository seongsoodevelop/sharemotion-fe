import styled from "styled-components";
import { TAG_DB } from "@lib/tagList";
import { useState } from "react";
import { DiaryTag } from ".";

const StyledWrapper = styled.div`
  width: 100%;

  padding: 1rem;
  padding-bottom: 0;

  user-select: none;
  cursor: pointer;
`;

export default function DiaryTagSelect({
  tag_string,
  callback,
  callbackRemove,
}) {
  const [type, setType] = useState(""); // ""이면 type. "*something*"이면 element

  return (
    <StyledWrapper>
      {tag_string !== "" ? (
        <h3 style={{ marginBottom: "0.25rem" }}>
          {tag_string.split(" ").map((o, id) => {
            return (
              <DiaryTag
                key={id}
                onClick={() => {
                  callbackRemove(id);
                }}
              >
                {o}
              </DiaryTag>
            );
          })}
        </h3>
      ) : (
        <h3 style={{ marginBottom: "0.75rem" }}>태그를 선택하세요</h3>
      )}
      {type === "" ? (
        <div>
          {TAG_DB.map((o, id) => {
            return (
              <DiaryTag
                key={id}
                onClick={() => {
                  setType(o.type);
                }}
              >
                #{o.type}
              </DiaryTag>
            );
          })}
        </div>
      ) : (
        <div>
          {
            <DiaryTag
              onClick={() => {
                setType("");
              }}
            >
              돌아가기
            </DiaryTag>
          }
          {TAG_DB.find((o) => o.type === type).list.map((o, id) => {
            return (
              <DiaryTag
                key={id}
                onClick={() => {
                  callback(o);
                }}
              >
                #{o}
              </DiaryTag>
            );
          })}
        </div>
      )}
    </StyledWrapper>
  );
}
