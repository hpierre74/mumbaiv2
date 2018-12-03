export const convertToDate = date => {
  const year = parseInt(date.substring(0, 4), 10);
  const month = parseInt(date.substring(5, 7), 10) - 1;
  const day = parseInt(date.substring(8, 10), 10);

  return new Date(year, month, day);
};

export default convertToDate;
