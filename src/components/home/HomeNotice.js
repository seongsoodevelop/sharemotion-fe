import { shadowCSSObject } from "@lib/styleUtils";

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
        ...shadowCSSObject,
      }}
    >
      <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>제목</div>
      <div>내용</div>
    </div>
  );
}
