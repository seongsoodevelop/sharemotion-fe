import { BtnSml } from "@components/common";
import { grayScale } from "@lib/palette";
import { useNavigate } from "react-router";

export default function NotFoundBanner() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        borderBottom: `solid 0.1rem ${grayScale.lv3}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2.5rem",
        fontWeight: 500,
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: 700 }}>
        404 Not Found
      </div>
      <div style={{ marginBottom: "1.6rem" }}>존재하지 않는 페이지입니다</div>
      <BtnSml
        onClick={() => {
          navigate(-1);
        }}
      >
        돌아가기
      </BtnSml>
    </div>
  );
}
