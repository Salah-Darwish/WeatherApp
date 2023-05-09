export default function getBgColor(dt, sunrise, sunset) {
  const halfAnHour = 30 * 60;

  if (sunrise - halfAnHour < dt && dt <= sunrise + halfAnHour) {
    return "#293f75";
  }

  if (sunrise + halfAnHour < dt && dt <= sunset - halfAnHour) {
    return "#4287f5";
  }

  if (sunset - halfAnHour < dt && dt <= sunset + halfAnHour) {
    return "#b88a40";
  }

  if (sunset + halfAnHour < dt || dt <= sunrise - halfAnHour) {
    return "#0a1226";
  }
}
