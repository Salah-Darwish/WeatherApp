import { View } from "react-native";
import styles from "./location-weather.styles";
import { Button, Text } from "../../components";
import { openSettings } from "expo-linking";
import { StatusBar } from "expo-status-bar";
import i18n from "../../langs";
export default function NoPermission() {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.permissionErrorText}>
        {i18n.t("home.permissionError")}
      </Text>
      <Button
        title={i18n.t("home.openSettings")}
        onPress={() => openSettings()}
      />
      <StatusBar style="auto" />
    </View>
  );
}
