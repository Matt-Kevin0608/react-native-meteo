import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_txt: {
    fontSize: 20,
  },
  image: {
    height: 70,
    width: 70,
  },
  temperature: {
    fontSize: 150,
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});
