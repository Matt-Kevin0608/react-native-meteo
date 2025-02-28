import { TouchableOpacity, View } from "react-native";
import { s } from "./Header.style";
import { Txt } from "../txt/Txt";
import { useNavigation } from "@react-navigation/native";

export function Header({ city }) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={nav.goBack} style={s.back_btn}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={s.header_txts}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={s.subtitle}>7 day forecasts</Txt>
      </View>
    </View>
  );
}
