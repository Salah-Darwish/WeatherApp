import commonEn from "i18n-js/json/en.json";

export default {
  ...commonEn.en,
  errors: {
    error: "Error!",
    saveSettings: "An error has occurred while saving settings.",
  },
  home: {
    title: "Home",
    notifications: {
      zero: "You have no notifications.",
      one: "You have one notification.",
      other: "You have %{count} notifications.",
    },
  },
  settings: {
    title: "Settings",
    useDeviceColorScheme: "Use Device Color Scheme Settings",
    colorScheme: "Color Scheme",
    dark: "Dark",
    light: "Light",
    units: "Units System",
    metric: "Metric",
    imperial: "Imperial",
    language: "Language",
    english: "English",
    arabic: "Arabic",
    languageInfo: "Changing language requires reloading the app.",
    reload: "Reload App",
  },
};
