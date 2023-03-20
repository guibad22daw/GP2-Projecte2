import React, { useState, Fragment } from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet } from 'react-native';
import Button from '../Button';
import styles from './Styles';
import { useFonts } from 'expo-font';

export function Contacte({ navigation }) {
  const [nom, setNom] = useState('');
  const [cognom, setCognom] = useState('');
  const [email, setEmail] = useState('');
  const [misstage, setMissatge] = useState('');

  const handleSubmit = () => {
    console.log('Nom:', nom);
    setNom('');
    console.log('Cognoms:', cognom);
    setCognom('');
    console.log('Email:', email);
    setEmail('');
    console.log('Missatge:', misstage);
    setMissatge('');
  };

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
      source={{ uri: 'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?cs=srgb&dl=pexels-arun-thomas-1156684.jpg&fm=jpg' }}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.titol}>Formulari de contacte</Text>
        <Text style={styles.description}>Necessites ajuda o tens alguna consulta en la qual puguem ajudar-te? Estem a la teva disposició.</Text>
        <Text style={styles.label}>Nom:</Text>
        <TextInput
          style={styles.input}
          placeholder="Introdueix el teu nom"
          value={nom}
          onChangeText={setNom}
        />
        <Text style={styles.label}>Cognoms:</Text>
        <TextInput
          style={styles.input}
          placeholder="Introdueix el teu cognom"
          value={cognom}
          onChangeText={setCognom}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Introdueix el teu email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Missatge:</Text>
        <TextInput
          style={[styles.input, styles.missatgeInput]}
          placeholder="Introdueix un missatge"
          value={misstage}
          onChangeText={setMissatge}
          multiline
        />
        <Button title="Click" buttonCustomStyles={{ backgroundColor: "#2196f3", borderRadius: 50, marginTop: 10 }} textCustomStyles={{ color: "white" }}
          onPress={handleSubmit}
        />
      </View>
    </ImageBackground>
  );
};
