import axios from "axios";

export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchCityByCoords(coords) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lon}&format=json`
      )
    ).data;

    return city || village || town;
  }

  static async fetchCoordsByCity(city) {
    try {
      const { latitude: lat, longitude: lon } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
        )
      ).data.results[0];
      return { lat, lon };
    } catch (error) {
      throw "Invalid city name";
    }
  }
}
