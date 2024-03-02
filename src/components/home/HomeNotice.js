export default function HomeNotice() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.5rem 0",
        fontSize: "1rem",
        background: "#ffd43b",
        textAlign: "center",
      }}
    >
      <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>
        감정 태그 데이터가 소실되었습니다
      </div>
      <div>
        데이터 취급 과정에서 감정태그 데이터가 소실되었습니다... <br />
        일기당 기존에 적으셨던 태그를
        <br />
        sharemotion@seongsoodevelop.cafe24.com
        <br />
        으로 보내주시면 이를 신속히 반영하겠습니다{" "}
      </div>
    </div>
  );
}
