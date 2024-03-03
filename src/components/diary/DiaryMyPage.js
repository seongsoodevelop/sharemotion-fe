import styled from "styled-components";
import {
  DiaryButton,
  DiaryContent,
  DiaryReaction,
  DiaryTag,
  DiaryTextArea,
} from ".";
import { textColorScale } from "@lib/palette";
import moment from "moment";
import { shadowCSS } from "@lib/styleUtils";
import { useState } from "react";
import { getCanEditDiary } from "@lib/diaryLock";

const DiaryWrapper = styled.div`
  width: 100%;

  background: white;

  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 0.4rem;

  ${shadowCSS}

  user-select: none;
`;

export default function DiaryMyPage({ data, lock, submitCallback }) {
  const canEdit = getCanEditDiary(data.create_at);
  const tag_string = data.tag_string.trim().split(" ");

  const [formText, setFormText] = useState(data.content);

  return (
    <DiaryWrapper>
      <div style={{ marginBottom: "0.25rem" }}>
        {tag_string.map((o, i) => (
          <DiaryTag key={i}>{o}</DiaryTag>
        ))}
      </div>
      {canEdit ? (
        <>
          <DiaryTextArea
            placeholder="다이어리 수정하기"
            value={formText}
            onChange={(e) => {
              setFormText(e.currentTarget.value);
            }}
            maxLength={399}
          />
          {formText !== data.content ? (
            <DiaryButton
              onClick={() => {
                submitCallback({
                  id: data.id,
                  content: formText,
                });
              }}
            >
              수정하기 ({`${formText.length}자 / 400자`})
            </DiaryButton>
          ) : null}
        </>
      ) : (
        <DiaryContent>
          {lock ? (
            <>
              <div>- 잠김 -</div>
              <div>
                {Math.ceil(
                  28 -
                    moment
                      .duration(moment().diff(moment(data.create_at)))
                      .asDays()
                )}
                일 후 잠금이 해제됩니다
              </div>
            </>
          ) : (
            data.content
          )}
        </DiaryContent>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "0.5rem",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            color: textColorScale.lv2,
          }}
        >
          {moment(data.create_at).format("YYYY-MM-DD HH:mm")}
        </div>
        <div style={{ flexGrow: 1 }} />
        <DiaryReaction love={data.love} />
      </div>
    </DiaryWrapper>
  );
}
