import { View, ScrollView, Switch } from "react-native";
import { useSettings } from "../../contexts";
import { useState } from "react";
import styles from "./settings.styles";
import { Choices, Card, Text, Button } from "../../components";
import i18n from "../../langs";
import { useTheme } from "@react-navigation/native";
export default function Settings() {
  const { settings, setSettings } = useSettings();
  const { colors } = useTheme();
  const [lang, setLang] = useState(settings.lang);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={[styles.card]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.label}>
            {i18n.t("settings.useDeviceColorScheme")}
          </Text>
          <Switch
            trackColor={{
              false: colors.background,
              true: colors.primary,
            }}
            thumbColor={"#fff"}
            value={settings.colorScheme == "auto"}
            onValueChange={() => {
              setSettings({
                colorScheme: settings.colorScheme == "auto" ? "light" : "auto",
              });
            }}
          />
        </View>
      </Card>
      {settings.colorScheme != "auto" && (
        <Card style={styles.card}>
          <Text style={styles.label}>{i18n.t("settings.colorScheme")}</Text>
          <Choices
            style={styles.choices}
            value={settings.colorScheme}
            onValueChange={(value) =>
              setSettings({
                colorScheme: value,
              })
            }
            items={[
              {
                label: i18n.t("settings.light"),
                value: "light",
              },
              {
                label: i18n.t("settings.dark"),
                value: "dark",
              },
            ]}
          />
        </Card>
      )}
      <Card style={styles.card}>
        <Text style={styles.label}>{i18n.t("settings.units")}</Text>
        <Choices
          style={styles.choices}
          value={settings.units}
          onValueChange={(value) =>
            setSettings({
              units: value,
            })
          }
          items={[
            {
              label: i18n.t("settings.metric"),
              value: "metric",
            },
            {
              label: i18n.t("settings.imperial"),
              value: "imperial",
            },
          ]}
        />
      </Card>
      <Card style={styles.card}>
        <Text style={styles.label}>{i18n.t("settings.language")}</Text>
        <Choices
          style={styles.choices}
          value={lang}
          onValueChange={(value) => setLang(value)}
          items={[
            {
              label: i18n.t("settings.english"),
              value: "en",
            },
            {
              label: i18n.t("settings.arabic"),
              value: "ar",
            },
          ]}
        />

        {lang !== settings.lang && (
          <View style={{ marginTop: 10 }}>
            <Text style={{ marginBottom: 10 }}>
              {i18n.t("settings.languageInfo")}
            </Text>
            <Button
              title={i18n.t("settings.reload")}
              onPress={() => setSettings({ lang })}
            />
          </View>
        )}
      </Card>
    </ScrollView>
  );
}
