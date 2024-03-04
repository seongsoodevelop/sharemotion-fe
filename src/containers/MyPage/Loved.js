import { Header, HeaderMargin } from "@components/base";
import { DiaryButton, DiaryHome } from "@components/diary";
import { PageWrapper } from "@components/common";
import { authSelector } from "@redux/modules/auth";
import {
  diarySelector,
  diary_getUserLoved,
  diary_query,
} from "@redux/modules/diary";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsDiaryLocked } from "@lib/diaryLock";

export default function Loved() {
  const auth = useSelector(authSelector);
  const diary = useSelector(diarySelector);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(diary_query({ page, loved: true }));
    dispatch(diary_getUserLoved({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Header />
      <HeaderMargin />
      {diary.data.length > 0 && (
        <PageWrapper>
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
                loved={
                  diary.data_loved.findIndex((x) => x.diary_id === o.id) !== -1
                }
                onPending={diary.onPending}
                isLogged={auth.isLogged}
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
        </PageWrapper>
      )}
    </>
  );
}
