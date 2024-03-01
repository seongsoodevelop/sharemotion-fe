import moment from "moment";

export const getIsDiaryLocked = (create_at) => {
  const me = moment(moment().format("YYYY-MM-DD"));
  const ms = moment(moment(create_at).format("YYYY-MM-DD"));
  let d = moment.duration(me.diff(ms)).asDays();
  if (d >= 2 && d <= 28) {
    return true;
  } else {
    return false;
  }
};

export const getCanEditDiary = (create_at) => {
  const me = moment(moment().format("YYYY-MM-DD"));
  const ms = moment(moment(create_at).format("YYYY-MM-DD"));
  let d = moment.duration(me.diff(ms)).asDays();
  if (d <= 1) {
    return true;
  } else {
    return false;
  }
};
