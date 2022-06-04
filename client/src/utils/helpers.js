export const getLastSync = (date) => {
  const currentDate = new Date(date);
  const datetime =
    "Last Sync: " +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDay() +
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
