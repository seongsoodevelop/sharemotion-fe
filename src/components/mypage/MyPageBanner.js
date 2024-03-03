import { shadowCSSObject } from "@lib/styleUtils";

export default function HomeBanner() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.5rem 0",
        fontWeight: 700,
        fontSize: "1rem",
        background: "white",
        borderRadius: "0.4rem",
        ...shadowCSSObject,
      }}
    >
      <div>작성 후 1일간 수정이 가능하지만</div>
      <div>작성 후 28일간 게시물의 내용을 보실 수 없어요</div>
      <div>감정에 너무 매몰되는 것을 막기 위함입니다</div>
      <div>잠금이 끝나는 28일 후에는 회고 알림을 드려요 😊</div>
    </div>
  );
}
