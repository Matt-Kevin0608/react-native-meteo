import { View } from "react-native";
import { s } from "./Home.style";
import { Txt } from "../../components/txt/Txt";

export function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Txt style={{ fontSize: 70 }}>Hello</Txt>
      </View>
      <View style={s.searchbar_container}>
        <Txt>SearchBar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt>Advanced Weather info</Txt>
      </View>
    </>
  );
}
