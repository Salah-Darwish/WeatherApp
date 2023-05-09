import { View, Image } from "react-native";
import moment from "moment-timezone";
import { LinearGradient } from "expo-linear-gradient";
import { displayTemperature, getBgColor } from "../../utils";
import Text from "../text/text";
import styles from "./full-weather-card.styles";

export default function CurrentWeather({ locationData, lang }) {
  const { current, timezone, daily } = locationData;
  const { dt, sunrise, sunset, temp, weather } = current;
  const locationDate = moment(new Date(dt * 1000)).tz(timezone);
  weatherIcon = weather[0].icon;
  return (
    <View>
      <LinearGradient
        colors={[getBgColor(dt, sunrise, sunset), "transparent"]}
        style={styles.gradient}
      />
      <View
        style={[
          styles.scrollOffset,
          {
            backgroundColor: getBgColor(dt, sunrise, sunset),
          },
        ]}
      />
      <View style={styles.currentWeatherContainer}>
        <Text style={styles.currentWeatherText}>
          {locationDate.format("dddd, D MMMM")}
        </Text>
        <Text style={[styles.currentWeatherText, { marginTop: 10 }]}>
          {locationDate.format("HH:mm")}
        </Text>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={styles.imageContainer}
            source={{
              uri: `http://openweathermap.org/img/wn/${weatherIcon}.png`,
            }}
          />
          <Text style={[styles.currentWeatherText, { fontSize: 34 }]}>
            {displayTemperature(temp, lang)}
          </Text>
        </View>

        <Text style={[styles.currentWeatherText, { marginBottom: 5 }]}>
          {weather[0].description}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.currentWeatherText}>
            {displayTemperature(daily[0].temp.max, lang)}
          </Text>
          <Text style={styles.currentWeatherText}> / </Text>
          <Text style={styles.currentWeatherText}>
            {displayTemperature(daily[0].temp.min, lang)}
          </Text>
        </View>
      </View>
    </View>
  );
}
