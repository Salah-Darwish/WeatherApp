import { View, Image, ScrollView } from "react-native";
import { Text, Card } from "../../components";
import moment from "moment-timezone";
import styles from "./full-weather-card.styles";
import { displayTemperature } from "../../utils";
import { useTheme } from "@react-navigation/native";
export default function HourlyWeather({ data, lang, timezone }) {
  const { colors } = useTheme();
  return (
    <Card style={styles.hourlyCard}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      >
        {data.map((hour) => {
          const { dt, temp, weather } = hour;
          weatherIcon = weather[0].icon;
          return (
            <View key={dt} style={styles.hourlyItem}>
              <Text style={styles.hourlyTime}>
                {moment(new Date(dt * 1000))
                  .tz(timezone)
                  .format("HH")}
              </Text>
              <Image
                style={[
                  styles.hourlyIcon,
                  {
                    tintColor: colors.text,
                  },
                ]}
                source={{
                  uri: `http://openweathermap.org/img/wn/${weatherIcon}.png`,
                }}
              />
              <Text style={styles.hourlyTemp}>
                {displayTemperature(temp, lang)}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </Card>
  );
}
