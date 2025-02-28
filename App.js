import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/home/Home";
import { Forecasts } from "./pages/forecasts/Forecasts";
import { ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoAPI } from "./api/meteo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    backgroud: "transparent",
  },
};

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      getWeatherByCoords(coordinates);
      getCotyByCoords(coordinates);
    }
  }, [coordinates]);

  async function getWeatherByCoords(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function getCotyByCoords(coords) {
    const cityResponse = await MeteoAPI.fetchCityByCoords(coords);
    setCity(cityResponse);
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
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={backgroundImg}
        style={s.img_background}
        imageStyle={s.img}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather && (
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home">
                  {() => <Home weather={weather} city={city} />}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
