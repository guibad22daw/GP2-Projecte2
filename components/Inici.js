import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export function Inici({ navigation }) {
  return (
    <ImageBackground 
      source={{uri: 'https://w0.peakpx.com/wallpaper/865/35/HD-wallpaper-africa-naturally.jpg'}}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.description}>
          This is a sample description of my app.
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
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
