import { View, ViewPropTypes } from "react-native";
import { useTheme } from "@react-navigation/native";
import styles from "./card.styles";

export default function Card({ style, ...props }) {
  const { colors } = useTheme();
  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        styles.card,
        style,
      ]}
    ></View>
  );
}
