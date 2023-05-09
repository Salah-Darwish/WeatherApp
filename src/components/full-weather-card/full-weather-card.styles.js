import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  locationNameContainer: {
    alignItems: "center",
    padding: 10,
    paddingTop: 20,
  },
  currentWeatherText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textShadowColor: "rgba(1,1,1,0.5)",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
  locationNameText: {
    fontSize: 20,
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "400%",
  },
  currentWeatherContainer: {
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: "contain",
  },
  hourlyCard: {
    margin: 20,
    paddingHorizontal: 0,
  },
  hourlyIcon: {
    marginTop: 10,
    marginBottom: 7,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  hourlyItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  hourlyTime: {
    opacity: 0.75,
  },
  hourlyTemp: {
    fontSize: 15,
    fontWeight: "700",
  },
  dailyCard: {
    margin: 20,
    marginTop: 0,
    borderTopWidth: 4,
  },
  gridRow: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  gridItem: {
    width: "50%",
    paddingHorizontal: 10,
  },
  infoCard: {
    borderTopWidth: 2,
  },
  infoCardTitle: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 20,
    fontWeight: "800",
  },
  infoCardValue: {
    fontSize: 26,
  },
  windArrow: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});

export default styles;
