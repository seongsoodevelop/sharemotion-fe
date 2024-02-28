import { Header, HeaderMargin } from "@components/base";
import {
  DiaryButton,
  DiaryHome,
  DiaryHomeWrapper,
  DiaryWrite,
} from "@components/diary";
import { HomeBanner, HomeNotice } from "@components/home";
import { authSelector } from "@redux/modules/auth";
import { diarySelector, diary_insert, diary_query } from "@redux/modules/diary";
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

  const handleWriteSubmit = (formTag, formText) => {
    if (!auth.isLogged) {
      alert("로그인 후 게시할 수 있어요.");
      return false;
    }

    if (formTag.trim() === "") {
      alert("태그를 적어도 하나 이상 선택해야 합니다!");
      return false;
    }
    if (formText.length < 10) {
      alert("본문은 적어도 10글자를 넘어야 합니다!");
      return false;
    }

    dispatch(
      diary_insert({
        tag_string: formTag,
        content: formText,
      })
    );

    return true;
  };

  return (
    <>
      <Header />
      <HeaderMargin />
      <HomeBanner />
      <HomeNotice />
      <DiaryHomeWrapper style={{ paddingBottom: 0 }}>
        <DiaryWrite submitCallback={handleWriteSubmit} />
      </DiaryHomeWrapper>
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
