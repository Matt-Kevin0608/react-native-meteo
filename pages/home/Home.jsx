import { View } from "react-native";
import { s } from "./Home.style";
import { Txt } from "../../components/txt/Txt";
import { MeteoBasic } from "../../components/meteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo-utils";
import { MeteoAdvanced } from "../../components/meteoAdvanced/MeteoAdvanced";
import { SearchBar } from "../../components/searchBar/SearchBar";

export function Home({ weather, city }) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  );
  const sunrise = weather.daily.sunrise[0].split("T")[1];
  const sunset = weather.daily.sunset[0].split("T")[1];
  const windspeed = weather.current_weather.windspeed;

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather.temperature)}
          interpretation={currentInterpretation}
          city={city}
          dailyWeather={weather.daily}
        />
      </View>
      <View style={s.searchbar_container}>
        <SearchBar />
      </View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          sunrise={sunrise}
          sunset={sunset}
          windspeed={windspeed}
        />
      </View>
    </>
  );
}
