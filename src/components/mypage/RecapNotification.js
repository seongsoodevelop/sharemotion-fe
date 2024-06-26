import { brandColor } from "@lib/palette";
import { shadowCSS } from "@lib/styleUtils";
import moment from "moment";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.4rem;

  background: ${brandColor};
  color: white;

  ${shadowCSS}

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  user-select: none;
`;

export default function RecapNotification({ data, callback }) {
  return (
    <Wrapper>
      <div style={{ width: "100%", fontWeight: 700, marginBottom: "0.5rem" }}>
        {moment(data.create_at).format("MM월 DD일의 나")}
      </div>
      <div style={{ width: "100%", marginBottom: "0.75rem" }}>
        {data.content.split(" ").slice(0, 10).join(" ")}
        <div
          style={{ textDecoration: "underline" }}
          onClick={() => {
            callback(moment(data.create_at).format("YYYY-MM-DD"));
          }}
        >
          {"···"} 더보기
        </div>
      </div>
    </Wrapper>
  );
}
