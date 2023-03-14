import { Button, Text, View } from "react-native";
import { iniciStyle } from "../style";

export default function IniciComponent({ navigation }) {
  return (
    <>
      <Text style={iniciStyle.container}>Home Screen</Text>
      <Button
        title="Anar a detalls"
        onPress={() => navigation.navigate("Details")}
      />
    </>
  );
}
