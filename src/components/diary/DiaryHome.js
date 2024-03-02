import styled from "styled-components";
import { DiaryContent, DiaryReaction, DiaryTag } from ".";
import { shadow } from "@lib/styleUtils";
import { useDispatch } from "react-redux";
import { diary_update_love } from "@redux/modules/diary";

const DiaryWrapper = styled.div`
  width: 100%;

  background: white;

  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 0.4rem;

  box-shadow: ${shadow};

  user-select: none;
`;

export default function DiaryHome({ data, lock, loved, onPending }) {
  const tag_string = data.tag_string.trim().split(" ");
  const dispatch = useDispatch();
  return (
    <DiaryWrapper>
      <div style={{ marginBottom: "0.25rem" }}>
        {tag_string.map((o, i) => (
          <DiaryTag key={i}>{o}</DiaryTag>
        ))}
      </div>
      <DiaryContent>{lock ? "- 잠김 -" : data.content}</DiaryContent>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <DiaryReaction
          love={null}
          onClick={() => {
            if (onPending) {
              alert("요청 처리 중입니다. 잠시만 기다린 후 다시 시도해주세요");
              return;
            }
            dispatch(diary_update_love({ id: data.id }));
          }}
          loved={loved}
        />
      </div>
    </DiaryWrapper>
  );
}
