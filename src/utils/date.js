// This utils file will contain date manipulation functions that may be needed throughout the app

export const convertDateFormat = (providedDate) => {
  const date = new Date(providedDate);
  return date.toDateString();
};
