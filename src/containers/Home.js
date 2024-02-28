import { Header, HeaderMargin } from "@components/base";
import { DiaryButton, DiaryHome, DiaryHomeWrapper } from "@components/diary";
import { HomeBanner, HomeNotice } from "@components/home";
import { authSelector } from "@redux/modules/auth";
import { diarySelector, diary_query } from "@redux/modules/diary";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsDiaryLocked } from "@lib/diaryLock";

export default function Home() {
  const auth = useSelector(authSelector);
  const diary = useSelector(diarySelector);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(diary_query({ page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Header />
      <HeaderMargin />
      <HomeBanner />
      <HomeNotice />
      {diary.data.length > 0 && (
        <DiaryHomeWrapper>
          {diary.data.map((o) => {
            return (
              <DiaryHome
                data={o}
                key={o.id}
                lock={
                  auth.isLogged &&
                  auth.loggedInfo.profile.id === o.auth_id &&
                  getIsDiaryLocked(o.create_at)
                }
              />
            );
          })}
          <DiaryButton
            onClick={() => {
              setPage(page + 1);
            }}
          >
            더보기
          </DiaryButton>
        </DiaryHomeWrapper>
      )}
    </>
  );
}
