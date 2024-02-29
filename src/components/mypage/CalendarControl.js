import { grayScale } from "@lib/palette";
import moment from "moment";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export default function CalendarControl({
  targetDate,
  setTargetDate,
  calendarTargetDate,
  setCalendarTargetDate,
}) {
  return (
    <h2
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        onClick={() => {
          const calendarTarget = moment(calendarTargetDate);
          setCalendarTargetDate(
            calendarTarget.subtract(1, "month").format("YYYY-MM-DD")
          );
          setTargetDate(
            moment(targetDate).subtract(1, "month").format("YYYY-MM-DD")
          );
        }}
        style={{
          fontSize: "1rem",
          paddingTop: "1rem",
          color: grayScale.lv4,
          cursor: "pointer",
        }}
      >
        <FaAngleLeft />
      </div>
      <div
        style={{ margin: "0 1rem", paddingTop: "0.45rem", cursor: "pointer" }}
        onClick={() => {
          setTargetDate(moment().format("YYYY-MM-DD"));
          setCalendarTargetDate(moment().format("YYYY-MM-DD"));
        }}
      >
        {moment(calendarTargetDate).format("YYYY.MM")}
      </div>
      <div
        onClick={() => {
          const calendarTarget = moment(calendarTargetDate);
          setCalendarTargetDate(
            calendarTarget.add(1, "month").format("YYYY-MM-DD")
          );
          setTargetDate(
            moment(targetDate).add(1, "month").format("YYYY-MM-DD")
          );
        }}
        style={{
          fontSize: "1rem",
          paddingTop: "1rem",
          color: grayScale.lv4,
          cursor: "pointer",
        }}
      >
        <FaAngleRight />
      </div>
    </h2>
  );
}
