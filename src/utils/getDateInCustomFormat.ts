const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getDateInCostumeFormat = (str: string) => {
  const date = new Date(str);

  const month = monthNames[date.getMonth() - 1];
  const year = date.getFullYear();
  const day = date.getDay();
  return `${month}, ${day}, ${year}`;
};
export default getDateInCostumeFormat;
