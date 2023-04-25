import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { Alert } from "react-native";
import i18n from "../langs";
import { isMetric, locale } from "expo-localization";
export const SettingsContext = createContext();
const defaultSettings = {
  lang: ["ar", "en"].includes(deviceLang) ? deviceLang : "en",
  units: isMetric ? "metric" : "imperial",
  colorScheme: "auto",
};
const deviceLang = locale.split("-")[0];
export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used withing a SettimgProvider");
  }
  return context;
}
export function SettingsProvider(props) {
  const [settings, setSettings] = useState(null);
  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem("@settings", JSON.stringify(settings));
      } catch {
        Alert.alert(i18n.t("errors.error"), i18n.t("errors.saveSettings"));
      }
    };
    if (settings) saveSettings();
  }, [settings]);
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const loadedSettings = await AsyncStorage.getItem("@settings");
        if (loadedSettings !== null) {
          setSettings(JSON.parse(loadedSettings));
        } else {
          setSettings(defaultSettings);
        }
      } catch {
        setSettings(defaultSettings);
      }
    };
    loadSettings();
  }, []);
  if (!settings) {
  }
  return (
    <SettingsContext.Provider
      {...props}
      value={{
        settings,
        setSettings: (newsettings) => {
          setSettings({ ...settings, ...newsettings });
        },
      }}
    >
      {settings ? props.children : <AppLoading />}
    </SettingsContext.Provider>
  );
}
