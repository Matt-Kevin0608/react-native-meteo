import { Header } from "../../components/header/Header";
import { s } from "./Forecasts.style";
import { useRoute } from "@react-navigation/native";

export function Forecasts({}) {
  const { params } = useRoute();
  return (
    <>
      <Header city={params.city} />
    </>
  );
}
