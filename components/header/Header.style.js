import { StyleSheet } from "react-native";

const BACK_BTN_WITDTH = 30;
export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  back_btn: {
    width: BACK_BTN_WITDTH,
  },
  header_txts: {
    flex: 1,
    marginRight: BACK_BTN_WITDTH,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 25,
  },
});
