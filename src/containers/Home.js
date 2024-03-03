import { Header, HeaderMargin } from "@components/base";
import {
  DiaryButton,
  DiaryHome,
  DiaryTag,
  DiaryWrite,
} from "@components/diary";
import { HomeBanner } from "@components/home";
import { PageWrapper } from "@components/common";
import { authSelector } from "@redux/modules/auth";
import {
  diarySelector,
  diary_getUserLoved,
  diary_insert,
  diary_query,
} from "@redux/modules/diary";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsDiaryLocked } from "@lib/diaryLock";
import { TAG_DB } from "@lib/tagList";
import { shadowCSSObject } from "@lib/styleUtils";
import { brandColor } from "@lib/palette";

export default function Home() {
  const auth = useSelector(authSelector);
  const diary = useSelector(diarySelector);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [diaryTagCategory, setDiaryTagCategory] = useState("");

  useEffect(() => {
    dispatch(diary_query({ page, diaryTagCategory }));
    dispatch(diary_getUserLoved({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, diaryTagCategory]);

  const handleWriteSubmit = (formTag, formText) => {
    if (!auth.isLogged) {
      alert("로그인 후 게시할 수 있어요.");
      return false;
    }

    if (diary.onPending) {
      alert("요청 처리 중입니다. 잠시만 기다려 주세요 :)");
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

  const getTagList = (tagList) => {
    return tagList.map((o) => (
      <DiaryTag
        key={o.type}
        style={
          o.type === diaryTagCategory
            ? {
                background: brandColor,
                color: "white",
                cursor: "pointer",
              }
            : { cursor: "pointer" }
        }
        onClick={() => {
          if (diaryTagCategory === o.type) {
            setDiaryTagCategory("");
          } else {
            setDiaryTagCategory(o.type);
            setPage(1);
          }
        }}
      >
        #{o.type}
      </DiaryTag>
    ));
  };

  return (
    <>
      <Header />
      <HeaderMargin />
      <PageWrapper style={{ paddingBottom: 0 }}>
        <HomeBanner />
      </PageWrapper>
      {/* <PageWrapper style={{ paddingBottom: 0 }}>
        <HomeNotice />
      </PageWrapper> */}
      <PageWrapper style={{ paddingBottom: 0 }}>
        <DiaryWrite submitCallback={handleWriteSubmit} />
      </PageWrapper>
      <PageWrapper style={{ paddingTop: "1rem", paddingBottom: 0 }}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            ...shadowCSSObject,
            borderRadius: "0.4rem",
            paddingTop: "1rem",
            paddingBottom: "0.5rem",
          }}
        >
          <DiaryTag
            style={
              "" === diaryTagCategory
                ? {
                    background: brandColor,
                    color: "white",
                    cursor: "pointer",
                  }
                : { cursor: "pointer" }
            }
            onClick={() => {
              if (auth.onPending) {
                alert("요청 중입니다. 잠시만 기다려주세요");
                return;
              }

              if (diaryTagCategory === "") {
                setDiaryTagCategory("");
              } else {
                setDiaryTagCategory("");
                setPage(1);
              }
            }}
          >
            전체
          </DiaryTag>
          {window.innerWidth >= 1000 ? (
            getTagList(TAG_DB)
          ) : window.innerWidth >= 400 ? (
            <>
              {getTagList(TAG_DB.slice(0, 5))}
              <div />
              {getTagList(TAG_DB.slice(5, 9))}
            </>
          ) : (
            <>
              {getTagList(TAG_DB.slice(0, 1))}
              <div />
              {getTagList(TAG_DB.slice(1, 5))}
              <div />
              {getTagList(TAG_DB.slice(5, 9))}
            </>
          )}
        </div>
      </PageWrapper>
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
