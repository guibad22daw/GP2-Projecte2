import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import Button from '../components/BotoComponent';
import styles from '../styles/IniciStyles';

export function Inici({ navigation }) {
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemibold: require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground 
      source={{uri: 'https://w0.peakpx.com/wallpaper/865/35/HD-wallpaper-africa-naturally.jpg'}}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Pobresa mundial</Text>
        <Text style={styles.description}>
        A l'actualitat, moltes persones no coneixen la realitat actual de molts països. T'ajudem a descobrir-la.
        </Text>
        <Button text="Veure dades" buttonCustomStyles={{ backgroundColor: "#2196f3", borderRadius: 50, marginTop: 10 }} textCustomStyles={{ color: "white" }}
          onPress={() => navigation.navigate('Dades')} width={"50%"} height={40}
        />
      </View>
    </ImageBackground>
  );
};