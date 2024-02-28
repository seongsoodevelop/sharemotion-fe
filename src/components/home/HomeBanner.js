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
        fontWeight: 700,
        fontSize: "1rem",
        background: "white",
      }}
    >
      <div>청년들의 진솔한 감정 이야기들을 만나보세요</div>
      <div>함께하시면 더 좋아요 💕</div>
    </div>
  );
}
