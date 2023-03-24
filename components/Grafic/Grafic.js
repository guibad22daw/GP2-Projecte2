import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, ImageBackground } from "react-native";
import * as SQLite from 'expo-sqlite';
import { Chart } from "../Chart/Chart";
import styles from "./Styles";

// Dades de pobresa pel gràfic

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
  const [Loading, setLoading] = useState(true);
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
        let newData = [];
        data.map(async (element) => {
          newData.push(parseFloat(element.percPoverty));
        });
        initialdataPobresa.datasets[0].data = newData;
        setDataPobresa(initialdataPobresa);
        console.log('dataPobresa', dataPobresa)
        setLoading(false);
      })
    });
  }, [])

    return (
      <View>
        <ImageBackground source={require("../../assets/img/grafics.jpg")}>
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
            <View style={styles.container}>
              <Text style={styles.titolGrafic}>Percentatge de pobresa</Text>
              {
                  Loading == false ?
                  <Chart style={styles.chartContainer} data={dataPobresa} />
                  : <Chart style={styles.chartContainer} data={initialdataPobresa} />
              }
            </View>
            <View style={styles.container}>
              <Text style={styles.titolGrafic}>
                Percentatge d'accés a electricitat
              </Text>
              <Chart style={styles.chartContainer} data={dataElectricitat} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titolGrafic}>Esperança de vida</Text>
              <Chart style={styles.chartContainer} data={dataEsperancaVida} />
            </View>
            <View style={styles.container}>
              <Text style={styles.titolGrafic}>Renta per capita</Text>
              <Chart style={styles.chartContainer} data={dataRentaCapita} />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
};

export default Grafic;
