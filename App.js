import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/home/Home";
import { ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoAPI } from "./api/meteo";

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      getWeatherByCoords(coordinates);
    }
  }, [coordinates]);

  console.log(weather);

  async function getWeatherByCoords(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    } else {
      setCoordinates({
        lat: "48.85",
        lon: "2.35",
      });
    }
  }

  return (
    <ImageBackground
      source={backgroundImg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
