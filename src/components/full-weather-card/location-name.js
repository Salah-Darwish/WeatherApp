import { View } from "react-native";
import Text from "../text/text";
import i18n from "../../langs";
import styles from "./full-weather-card.styles";
export default function LocationName({ locationName }) {
  return (
    <View style={styles.locationNameContainer}>
      <Text style={[styles.locationNameText, styles.currentWeatherText]}>
        {locationName || i18n.t("weather.yourLocation")}
      </Text>
    </View>
  );
}
