import styled from "styled-components";
import { DiaryContent, DiaryReaction, DiaryTag } from ".";
import { shadow } from "@lib/styleUtils";

const DiaryWrapper = styled.div`
  width: 100%;

  background: white;

  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 0.4rem;

  box-shadow: ${shadow};

  user-select: none;
`;

export default function DiaryHome({ data, lock }) {
  const tag_string = data.tag_string.trim().split(" ");
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
        <DiaryReaction like={data.like} />
      </div>
    </DiaryWrapper>
  );
}
