export const getLastSync = (date) => {
  const currentDate = new Date(date);
  const datetime =
    "Last Sync: " +
    currentDate.getDay() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear() +
    " @ " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  return datetime;
};
