import moment from "moment";

export const getIsDiaryLocked = (create_at) => {
  let d =
    Number(moment().format("YYYYMMDD")) -
    Number(moment(create_at).format("YYYYMMDD"));
  if (d > 1 && d <= 28) {
    return true;
  } else {
    return false;
  }
};
