import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { useEffect } from "react";
import { I18nManager } from "react-native";
import { LocationWeather, Settings } from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { DarkTheme, LightTheme } from "./navigator.styles";
import tabBarScreenOptions from "./tabbar-screen-options";
import i18n from "../../langs";
import moment from "moment-timezone";
import "moment/locale/ar";
import { reloadAsync } from "expo-updates";
import { useSettings } from "../../contexts";
import AppLoading from "expo-app-loading";
const Tab = createBottomTabNavigator();

I18nManager.allowRTL(true);
export default function Navigator() {
  const { settings } = useSettings();
  useEffect(() => {
    const loadLanguage = async () => {
      const lang = settings.lang;
      const isRTL = I18nManager.isRTL;
      i18n.locale = lang;
      moment.locale(lang);
      if (lang === "en" && isRTL) {
        await I18nManager.forceRTL(false);
        await reloadAsync();
      }
      if (lang === "ar" && !isRTL) {
        await I18nManager.forceRTL(true);
        await reloadAsync();
      }
    };
    loadLanguage();
  }, [settings.lang]);
  <AppLoading />;
  const deviveColorScheme = useColorScheme();
  const scheme =
    settings.colorScheme == "auto" ? deviveColorScheme : settings.colorScheme;
  return (
    <NavigationContainer theme={scheme == "dark" ? DarkTheme : LightTheme}>
      <Tab.Navigator screenOptions={tabBarScreenOptions}>
        <Tab.Screen
          name="home"
          component={LocationWeather}
          options={{
            title: i18n.t("home.title"),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: true,
            title: i18n.t("settings.title"),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
