import { Header, HeaderMargin } from "@components/base";
import { PageWrapper } from "@components/common";
import { Calendar, MyPageBanner } from "@components/mypage";
import { authSelector } from "@redux/modules/auth";
import { diarySelector, diary_getUser } from "@redux/modules/diary";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MyP() {
  const auth = useSelector(authSelector);
  const diary = useSelector(diarySelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.isLogged) {
      return;
    }
    dispatch(diary_getUser({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isLogged]);

  if (!auth.isLogged) {
    return (
      <>
        <Header />
        <HeaderMargin />
        <PageWrapper>
          <MyPageBanner />
        </PageWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <HeaderMargin />
      <PageWrapper style={{ paddingBottom: 0 }}>
        <MyPageBanner />
      </PageWrapper>
      <Calendar data={diary.data} />
    </>
  );
}
