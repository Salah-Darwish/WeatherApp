import toArabicNumerals from "./to-arabic-numeric";

const displayNumber = (number, long) => {
  return long == "ar" ? toArabicNumerals(number) : number;
};
export default displayNumber;
