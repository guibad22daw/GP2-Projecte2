import React from 'react';
import { Text, View, ImageBackground, Button } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './Styles';

export function Inici({ navigation }) {
  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemibold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
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
        <Button
          title="Veure dades"
          onPress={() => navigation.navigate('Dades')}
        />
      </View>
    </ImageBackground>
  );
};
