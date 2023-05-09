import displayNumber from "./display-number";
const displayTemperature = (temp, long) => {
  return displayNumber(Math.round(temp), long) + "°";
};
export default displayTemperature;
