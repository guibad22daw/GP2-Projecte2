import { Button, Text, View } from "react-native";

export default function IniciComponent({ navigation }) {
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
