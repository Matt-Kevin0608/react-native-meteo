import { StyleSheet, View } from "react-native";
import { Txt } from "../txt/Txt";

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#0000005c",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
  },
});

export function StyleContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}

export function StyleLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}

export function StyleValue({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}

export { s };
