import { MyPage as MyPageContainer, Loved } from "@containers/MyPage";
import { Route, Routes } from "react-router";

export default function MyPage() {
  return (
    <Routes>
      <Route path="/loved" element={<Loved />} />
      <Route path="/*" element={<MyPageContainer />} />
    </Routes>
  );
}
