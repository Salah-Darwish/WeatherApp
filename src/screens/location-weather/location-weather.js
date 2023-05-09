import { View, ActivityIndicator } from "react-native";
import styles from "./location-weather.styles";
import { useEffect, useState } from "react";
import NoPermission from "./no-permission";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { openweathermap, getErrorMessage } from "../../utils";
import { useLocation, useSettings } from "../../contexts";
import { Text, FullWeatherCard } from "../../components";
export default function LocationWeather() {
  const { colors } = useTheme();
  const { granted, location } = useLocation();
  const { settings } = useSettings();
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState();
  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location.coords;

      openweathermap
        .get("onecall", {
          params: {
            lat: latitude,
            lon: longitude,
            units: settings.units,
            lang: settings.lang,
          },
        })
        .then((res) => setLocationData(res.data))
        .catch((err) => {
          setError(getErrorMessage(err));
        });
    }
  }, [location, settings.units]);
  if (!granted) return <NoPermission />;

  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.permissionErrorText}>{error}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  if (location == null || locationData == null)
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator color={colors.primary} size={40} />
        <StatusBar style="auto" />
      </View>
    );
  return (
    <View style={styles.container}>
      {locationData && (
        <FullWeatherCard
          locationData={locationData}
          locationName={
            location.locationNames && location.locationNames[settings.lang] 
          }
          lang={settings.lang}
        />
      )}
    </View>
  );
}
