import { View } from "react-native";
import { s } from "./Home.style";
import { Txt } from "../../components/txt/Txt";
import { MeteoBasic } from "../../components/meteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo-utils";

export function Home({ weather }) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  );

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather.temperature)}
          interpretation={currentInterpretation}
        />
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
