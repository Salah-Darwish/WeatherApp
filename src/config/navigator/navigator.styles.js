export const DarkTheme = {
  dark: true,
  colors: {
    background: "#120d1c",
    border: "#1a1429",
    card: "#221a36",
    notification: "#ff443a",
    primary: "#bb29eb",
    text: "#dafaf7",
  },
};

export const LightTheme = {
  dark: false,
  colors: {
    background: "#e1d4fa",
    border: "#e3d9fa",
    card: "#f1ebff",
    notification: "#ff443a",
    primary: "#bb29eb",
    text: "#161021",
  },
};

export const commonScreenOptions = {
  headerStyle: {
    backgroundColor: DarkTheme.colors.card,
  },
  headerTintColor: DarkTheme.colors.text,
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerBackTitleStyle: {
    fontSize: 8,
  },
};
