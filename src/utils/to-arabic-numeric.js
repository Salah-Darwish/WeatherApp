const toArabicNumerals = (string) => {
  return String(string)
    .split("")
    .map((char) => {
      const arabicNumbers = ["۰", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
      if (parseInt(char) || parseInt(char) === 0) {
        return arabicNumbers[parseInt(char)];
      }
      return char;
    })
    .join("");
};

export default toArabicNumerals;
