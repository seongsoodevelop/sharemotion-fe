export default function HomeBanner() {
  return (
    <div
      style={{
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
      <div>2차 release 03. 02. 24:00 (2차 개발완료)</div>
      <div>3차 release 03. 03. 24:00 (알파테스트 시작)</div>
    </div>
  );
}
