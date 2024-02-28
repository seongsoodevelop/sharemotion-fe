import { useDispatch } from "react-redux";
import KakaoLogin from "react-kakao-login";
import { auth_login } from "@redux/modules/auth";

export default function Login() {
  const dispatch = useDispatch();
  const KAKAO_JS_KEY = "ed07a1f105bb46b343592e2911eec1ce";

  const kakaoOnSuccess = async (data) => {
    dispatch(
      auth_login({
        token: data.response.access_token,
      })
    );
  };
  const kakaoOnFailure = (error) => {
    console.log(error);
  };
  return (
    <>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "1.625rem",
          userSelect: "none",
          lineHeight: 1.5,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Sharemotion
        <br />
        여러분의 감정에
        <br />
        로그인하세요
      </div>
      <KakaoLogin
        token={KAKAO_JS_KEY}
        onSuccess={kakaoOnSuccess}
        onFailure={kakaoOnFailure}
        style={{
          fontWeight: 700,
          background: "#fee500",
          color: "#000000 85%",
          outline: "none",
          border: "none",
          padding: "1rem 2rem",
          fontSize: "1rem",
          borderRadius: "0.4rem",
          fontFamily: "Pretendard",
          cursor: "pointer",
          userSelect: "none",
        }}
      />
    </>
  );
}
