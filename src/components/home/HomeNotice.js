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
      <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>제목</div>
      <div>본문</div>
    </div>
  );
}
