import styled from "styled-components";
import { DiaryTag } from ".";
import { textColorScale } from "@lib/palette";
import moment from "moment";
import { shadow } from "@lib/styleUtils";

const DiaryWrapper = styled.div`
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
      <div style={{ marginBottom: "0.5rem" }}>
        {tag_string.map((o, i) => (
          <DiaryTag key={i}>{o}</DiaryTag>
        ))}
      </div>
      {lock ? "- 잠김 -" : data.content}
      <div style={{ marginTop: "0.5rem", color: textColorScale.lv2 }}>
        {moment(data.create_at).format("YYYY-MM-DD HH:mm")}
      </div>
    </DiaryWrapper>
  );
}
