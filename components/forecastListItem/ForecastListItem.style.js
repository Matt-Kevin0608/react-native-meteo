import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  image: {
    height: 50,
    width: 50,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  temperature: {
    minWidth: 50,
    textAlign: "right",
  },
});
