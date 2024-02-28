import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Auth, NotFound } from "@pages";
import storage from "@lib/storage";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, auth_login } from "@redux/modules/auth";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  useEffect(() => {
    if (auth.onPending) {
      return;
    }

    const loggedInfo = storage.get("loggedInfo");
    if (loggedInfo) {
      dispatch(auth_login({}));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
