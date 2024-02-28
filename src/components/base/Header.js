import { brandColor } from "@lib/palette";
import { authSelector } from "@redux/modules/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Header() {
  const auth = useSelector(authSelector);
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: `solid 0.15rem ${brandColor}`,
        lineHeight: 1,
        background: "white",
        zIndex: 10,
        userSelect: "none",
        color: brandColor,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "5.75rem",
            display: "flex",
            padding: "0 1rem",
            paddingTop: "1rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.5rem",
              position: "absolute",
              right: "50%",
              transform: "translate(50%,0)",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Sharemotion
          </div>
          <div style={{ flexGrow: 1 }} />
          <div
            style={{
              padding: "0.5rem 0.6rem",
              fontSize: "1rem",
              fontWeight: 700,
              borderRadius: "0.4rem",
              background: brandColor,
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              if (auth.isLogged) {
                navigate("/mypage");
              } else {
                navigate("/auth/login");
              }
            }}
          >
            {auth.isLogged ? "MY" : "로그인"}
          </div>
        </div>
      </div>
    </div>
  );
}
