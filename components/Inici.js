import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { useFonts } from 'expo-font';

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
        <Button
          title="Veure dades"
          onPress={() => navigation.navigate('Dades')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 32,
    fontFamily:'PoppinsSemibold',
    color: '#fff',
    marginBottom: 20,
  },
  description: {
    fontFamily:'Poppins',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
});
