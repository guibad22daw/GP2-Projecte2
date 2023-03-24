import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, ImageBackground, ActivityIndicator } from "react-native";
import * as SQLite from 'expo-sqlite';
import { Chart } from "../components/GraficComponent";
import styles from '../styles/GraficStyles';


// Dades d'accés a electricitat pel gràfic
const dataElectricitat = {
  labels: ["Europa", "Àfrica", "Àsia", "Amèrica", "Oceania"],
  datasets: [
    {
      data: [100, 43, 97, 99, 99],
    },
  ],
};

// Dades d'esperança de vida pel gràfic
const dataEsperancaVida = {
  labels: ["Europa", "Àfrica", "Àsia", "Amèrica", "Oceania"],
  datasets: [
    {
      data: [80, 64.4, 79, 78, 83.2],
    },
  ],
};

// Dades de renta per capita pel gràfic
const dataRentaCapita = {
  labels: ["Europa", "Àfrica", "Àsia", "Amèrica", "Oceania"],
  datasets: [
    {
      data: [38234, 4121, 13037, 37927, 48520],
    },
  ],
};

const Grafic = () => {
  const [loading, setLoading] = useState(true);
  // Dades de pobresa pel gràfic
  let initialdataPobresa = {
    labels: ["Europa", "Àfrica", "Àsia", "Amèrica", "Oceania"],
    datasets: [
      {
        data: [],
      },
    ],
  }

  const [dataPobresa, setDataPobresa] = useState(initialdataPobresa)

  useEffect(() => {
    db = SQLite.openDatabase("db.db");
    db.transaction(tx => {
      tx.executeSql("select percPoverty from continents", [], async (_, { rows }) => {
        let data = await rows._array;
        let newDataPobresa = initialdataPobresa;
        data.map(async (element) => {
          newDataPobresa.datasets[0].data.push(parseFloat(element.percPoverty));
        });
        setDataPobresa(newDataPobresa);
        setLoading(false);
      })
    });
  }, [])

  return (
    <View>
      <ImageBackground source={require("../assets/img/grafics.jpg")}>
        <ScrollView style={styles.scroll}>
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <Text style={styles.titol}>Gràfics comparatius</Text>
              <Text style={styles.subtitol}>
                Mostrem diversos gràfics comparatius amb les dades dels
                diferents continents.
              </Text>
            </View>
          </View>
          <Chart data={dataPobresa} loading={loading} estilGrafic={styles.grafic1} titolGrafic="Percentatge de pobresa"/>
          <Chart data={dataElectricitat} loading={loading} estilGrafic={styles.grafic1} titolGrafic="Percentatge d'accés a electricitat"/>
          <Chart data={dataEsperancaVida} loading={loading} estilGrafic={styles.grafic1} titolGrafic="Esperança de vida"/>
          <Chart data={dataRentaCapita} loading={loading} estilGrafic={styles.grafic2} titolGrafic="Renta per capita"/>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Grafic;