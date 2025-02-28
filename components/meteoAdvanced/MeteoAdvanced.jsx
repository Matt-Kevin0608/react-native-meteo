import { View } from "react-native";
import {
  s,
  StyleContainer,
  StyleLabel,
  StyleValue,
} from "./MeteoAdvanced.style";

export function MeteoAdvanced({ sunrise, sunset, windspeed }) {
  return (
    <View style={s.container}>
      <StyleContainer>
        <StyleLabel>{sunrise}</StyleLabel>
        <StyleValue>Sunrise</StyleValue>
      </StyleContainer>
      <StyleContainer>
        <StyleLabel>{sunset}</StyleLabel>
        <StyleValue>Sunset</StyleValue>
      </StyleContainer>
      <StyleContainer>
        <StyleLabel>{windspeed} km/h</StyleLabel>
        <StyleValue>Wind speed</StyleValue>
      </StyleContainer>
    </View>
  );
}
