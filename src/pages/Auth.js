import { AuthWrapper } from "@components/auth";
import { Login } from "@containers/Auth";
import { Route, Routes } from "react-router";

export default function Auth() {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AuthWrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthWrapper>
    </div>
  );
}
