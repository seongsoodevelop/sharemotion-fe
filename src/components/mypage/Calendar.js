import { PageWrapper } from "@components/common";
import moment from "moment";
import { useState } from "react";
import { CalendarControl } from "./";
import { brandColor } from "@lib/palette";

export default function Calendar({ data }) {
  const [targetDate, setTargetDate] = useState(moment().format("YYYY-MM-DD"));
  const [calendarTargetDate, setCalendarTargetDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  let diaryDataIndex = 0;

  const makeCalendarDateArr = () => {
    const calendarTarget = moment(calendarTargetDate);

    let s = moment(calendarTarget.format());
    s.subtract(s.date() - 1, "day");
    s.subtract(s.day(), "day");

    const res = [];
    while (true) {
      const arr = [];
      for (let i = 0; i < 7; i++) {
        arr.push(s.format("YYYY-MM-DD"));
        s.add(1, "day");
      }
      res.push(arr);
      if (s.month() !== calendarTarget.month()) break;
    }

    return res;
  };

  const getDiaryArr = (date) => {
    const res = [];
    while (
      diaryDataIndex < data.length &&
      Number(moment(date).format("YYYYMMDD")) >=
        Number(moment(data[diaryDataIndex].create_at).format("YYYYMMDD"))
    ) {
      if (
        Number(moment(date).format("YYYYMMDD")) ===
        Number(moment(data[diaryDataIndex].create_at).format("YYYYMMDD"))
      )
        res.push(data[diaryDataIndex]);
      diaryDataIndex++;
    }

    return res;
  };

  return (
    <PageWrapper style={{ userSelect: "none" }}>
      <CalendarControl
        targetDate={targetDate}
        setTargetDate={setTargetDate}
        calendarTargetDate={calendarTargetDate}
        setCalendarTargetDate={setCalendarTargetDate}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          fontWeight: 700,
          fontSize: "0.8rem",
          lineHeight: 1.5,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          {["S", "M", "T", "W", "T", "F", "S"].map((o) => (
            <div
              key={o}
              style={{
                width: "14.2857%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {o}
            </div>
          ))}
        </div>
        {makeCalendarDateArr().map((w) => {
          return (
            <div
              key={w[0]}
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              {w.map((o) => {
                let diaryArr = getDiaryArr(o);

                const defaultStyle = {
                  width: "14.2857%",
                  height: "4.5rem",
                  paddingTop: "0.25rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  background: targetDate === o ? brandColor : "white",
                  borderRadius: "0.4rem",
                  cursor: "pointer",
                };

                const makeTagArr = () => {
                  if (diaryArr.length === 0) return [];
                  const res = [];
                  const str = diaryArr[0].tag_string.trim().split(" ");
                  if (str.length >= 1) res.push(str[0].slice(1, 5));
                  if (str.length >= 2) res.push(str[1].slice(1, 5));
                  return res;
                };

                return (
                  <div
                    key={o}
                    onClick={() => {
                      setTargetDate(o);
                    }}
                    style={
                      diaryArr.length > 0
                        ? {
                            ...defaultStyle,
                            color: targetDate === o ? "white" : brandColor,
                          }
                        : {
                            ...defaultStyle,
                            color: targetDate === o ? "white" : "black",
                          }
                    }
                  >
                    <div>{moment(o).format("DD")}</div>
                    {makeTagArr().map((o, id) => (
                      <div key={id}>{o}</div>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}
