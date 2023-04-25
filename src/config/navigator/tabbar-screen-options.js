import { Ionicons } from "@expo/vector-icons";
import { commonScreenOptions } from "./navigator.styles";
import { getTabBarIcon } from "../../utils";
const tabBarScreenOptions = ({ route }) => ({
  ...commonScreenOptions,
  headerShown: false,

  tabBarIcon: ({ focused, color, size }) => {
    return (
      <Ionicons
        name={getTabBarIcon(route, focused)}
        color={color}
        size={size}
      />
    );
  },
});

export default tabBarScreenOptions;
