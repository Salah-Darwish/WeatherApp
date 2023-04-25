import { View, Button } from "react-native";
import { Text } from "../../components";
import i18n from "../../langs";
import styles from "./home.styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26 }}>{i18n.t("home.title")}</Text>
      <Text style={{ fontSize: 26 }}>
        {i18n.t("home.notifications", { count: 0 })}
      </Text>
      <Text style={{ fontSize: 26 }}>
        {i18n.t("datetime.distance_in_words.about_x_hours", { count: 5 })}
      </Text>
      <Text style={{ fontSize: 26 }}>
        {i18n.l("date.formats.long", new Date())}
      </Text>

      <Text style={{ fontSize: 26 }}>
        {i18n.strftime(new Date(), "%A %d %B")}
      </Text>
      <Button
        title="Home 2"
        onPress={() => {
          navigation.navigate("Home 2");
        }}
      />
    </View>
  );
}
