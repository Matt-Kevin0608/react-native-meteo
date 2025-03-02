import { TextInput } from "react-native";
import { s } from "./SearchBar.style";

export function SearchBar({ onSubmit }) {
  return (
    <TextInput
      placeholder="Type a city... Ex: Paris"
      style={s.input}
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
    />
  );
}
