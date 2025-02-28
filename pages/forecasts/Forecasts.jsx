import { View } from "react-native";
import { ForecastListItem } from "../../components/forecastListItem/ForecastListItem";
import { Header } from "../../components/header/Header";
import { s } from "./Forecasts.style";
import { useRoute } from "@react-navigation/native";
import { DAYS, getWeatherInterpretation } from "../../utils/meteo-utils";

export function Forecasts({}) {
  const { params } = useRoute();
  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, i) => {
        const weatherCode = params.weathercode[i];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = params.temperature_2m_max[i].toFixed(0);
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formattedDate = date.toLocaleDateString("default", {
          day: "2-digit",
          month: "2-digit",
        });
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formattedDate}
            temperature={temperature}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params.city} />
      {forecastList}
    </>
  );
}
