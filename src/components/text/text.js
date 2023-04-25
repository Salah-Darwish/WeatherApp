import PropTypes from "prop-types";
import { Text as NativeText, TextPropTypes } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Text({ children, style, weight, ...props }) {
  const { colors } = useTheme();

  return (
    <NativeText
      style={[
        {
          color: colors.text,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </NativeText>
  );
}
