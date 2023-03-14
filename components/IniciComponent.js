import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function IniciComponent() {
  return (
    <>
      <Text>Home Screen</Text>
      <Button
        title="Anar a detalls"
        onPress={() => navigation.navigate("Details")}
      />
    </>
  );
}
