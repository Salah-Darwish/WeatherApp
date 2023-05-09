import { View, Image } from "react-native";
import moment from "moment-timezone";
import { useTheme } from "@react-navigation/native";
import i18n from "../../langs";
import { displayTemperature } from "../../utils";
import styles from "./full-weather-card.styles";
import Text from "../text/text";
import Card from "../card/card";

export default function DailyWeather({ data, lang, timezone }) {
  const { colors } = useTheme();
  return (
    <Card
      style={[
        styles.dailyCard,
        {
          borderTopColor: colors.primary,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        {i18n.t("weather.dailyTitle")}
      </Text>
      {data.map((day, index) => {
        const { dt, weather, temp } = day;
        const weatherIcon = weather[0].icon;
        const today = moment(new Date()).tz(timezone);
        const weatherDay = moment(new Date(dt * 1000)).tz(timezone);
        return (
          <View
            key={dt}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: data.length == index + 1 ? 0 : 1,
              paddingVertical: 5,
              borderColor: colors.border,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                {today.date() === weatherDay.date()
                  ? i18n.t("weather.today")
                  : weatherDay.format("ddd, D MMM")}
              </Text>
              <Image
                style={[
                  styles.imageContainer,

                  {
                    tintColor: colors.text,
                  },
                ]}
                source={{
                  uri: `http://openweathermap.org/img/wn/${weatherIcon}.png`,
                }}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.dailyTemp}>
                {displayTemperature(temp.max, lang)}
              </Text>
              <Text style={styles.dailyTemp}> / </Text>
              <Text style={styles.dailyTemp}>
                {displayTemperature(temp.min, lang)}
              </Text>
            </View>
          </View>
        );
      })}
    </Card>
  );
}
