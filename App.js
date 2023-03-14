import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IniciComponent from "./components/IniciComponent.js";
import React from "react";

import { iniciStyle } from "./style.js";

function Inici({ navigation }) {
  return (
    <View>
      <IniciComponent navigation={navigation}></IniciComponent>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inici">
        <Stack.Screen name="Inici" component={Inici} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
