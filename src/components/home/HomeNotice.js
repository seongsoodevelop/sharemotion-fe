import { grayScale } from "@lib/palette";

export default function HomeBanner() {
  return (
    <div
      style={{
        borderBottom: `solid 0.1rem ${grayScale.lv3}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.5rem 0",
        fontSize: "1rem",
        background: "#ffd43b",
      }}
    >
      <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>
        정식 서비스 개발 중 (02.25. ~ 03.03.)
      </div>
      <div>1차 release 02. 29. 24:00 (1차 개발완료)</div>
      <div>2차 release 03. 02. 24:00 (2차 개발완료)</div>
      <div>2차 release 03. 03. 24:00 (알파테스트 시작)</div>
      <div
        style={{
          margin: "2rem",
          border: `solid 0.1rem black`,
          width: "6rem",
        }}
      />
      <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>개발 완료</div>
      {["Kakao 로그인", "글 보기", "글 쓰기"].map((o, i) => (
        <div key={i}>{o}</div>
      ))}
    </div>
  );
}
