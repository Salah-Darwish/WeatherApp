import PropTypes from "prop-types";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSettings } from "../../contexts";
import { displayTemperature, displayNumber } from "../../utils";
import i18n from "../../langs";
import Card from "../card/card";
import Text from "../text/text";
import styles from "./full-weather-card.styles";

export default function CurrentInfo({ data, lang }) {
  const { colors } = useTheme();
  const { settings } = useSettings();
  const cardStyles = { borderTopColor: colors.primary };
  const isMetric = settings.units === "metric";
  return (
    <View>
      <View style={styles.gridRow}>
        <View style={styles.gridItem}>
          <Card style={[styles.infoCard, cardStyles]}>
            <Text style={styles.infoCardTitle}>
              {i18n.t("weather.humidity")}
            </Text>
            <Text style={styles.infoCardValue}>
              {displayNumber(data.humidity, lang)}%
            </Text>
          </Card>
        </View>
        <View style={styles.gridItem}>
          <Card style={[styles.infoCard, cardStyles]}>
            <Text style={styles.infoCardTitle}>
              {i18n.t("weather.feelsLike")}
            </Text>
            <Text style={styles.infoCardValue}>
              {displayTemperature(data.feels_like, lang)}
            </Text>
          </Card>
        </View>
      </View>
      <View style={styles.gridRow}>
        <View style={styles.gridItem}>
          <Card style={[styles.infoCard, cardStyles]}>
            <Text style={styles.infoCardTitle}>
              {i18n.t("weather.visibility")}
            </Text>
            <Text style={styles.infoCardValue}>
              {displayNumber(data.visibility / 1000, lang)}
              <Text style={{ fontSize: 18 }}> {i18n.t("weather.km")}</Text>
            </Text>
          </Card>
        </View>
        <View style={styles.gridItem}>
          <Card style={[styles.infoCard, cardStyles]}>
            <Text style={styles.infoCardTitle}>
              {i18n.t("weather.windSpeed")}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.infoCardValue}>
                {displayNumber(
                  Math.round(
                    isMetric ? data.wind_speed * 3.6 : data.wind_speed
                  ),
                  lang
                )}
                <Text style={{ fontSize: 18 }}>
                  {" "}
                  {isMetric ? i18n.t("weather.kmh") : i18n.t("weather.mph")}
                </Text>
              </Text>
              <View
                style={[
                  styles.windArrow,
                  {
                    transform: [
                      {
                        rotate: `${data.wind_deg}deg`,
                      },
                    ],
                  },
                ]}
              >
                <Ionicons
                  name="arrow-down-sharp"
                  size={25}
                  color={colors.text}
                />
              </View>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
}
