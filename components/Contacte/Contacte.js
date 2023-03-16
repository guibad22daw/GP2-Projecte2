import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './Styles';

export function Contacte ({ navigation }) {
  const [nom, setNom] = useState('');
  const [cognom, setCognom] = useState('');
  const [email, setEmail] = useState('');
  const [misstage, setMissatge] = useState('');

  const handleSubmit = () => {
    console.log('Nom:', nom);
    console.log('Cognoms:', cognom);
    console.log('Email:', email);
    console.log('Missatge:', misstage);
  };

  return (
    <View style={styles.container}>
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
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};
