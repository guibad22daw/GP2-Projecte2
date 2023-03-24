import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, ImageBackground, ActivityIndicator } from "react-native";
import * as SQLite from 'expo-sqlite';
import { Chart } from "../Chart/Chart";

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
              loading == false ?
                <Chart style={styles.grafic1} data={dataPobresa} />
                : <ActivityIndicator size="large" color="#2296f3" style={{ marginTop: 20 }} />
            }
          </View>
          <View style={styles.container}>
            <Text style={styles.titolGrafic}>
              Percentatge d'accés a electricitat
            </Text>
            <Chart style={styles.grafic1} data={dataElectricitat} />
          </View>
          <View style={styles.container}>
            <Text style={styles.titolGrafic}>Esperança de vida</Text>
            <Chart style={styles.grafic1} data={dataEsperancaVida} />
          </View>
          <View style={styles.container}>
            <Text style={styles.titolGrafic}>Renta per capita</Text>
            <Chart style={styles.grafic2} data={dataRentaCapita} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  header: {
    height: 160,
    justifyContent: 'center',
    alignItems: "center",
    fontFamily: 'PoppinsSemibold',
    color: 'black'
  },
  titol: {
    fontFamily: 'PoppinsSemibold',
    fontSize: 30,
    color: 'white'
  },
  subtitol: {
    fontFamily: 'PoppinsSemibold',
    fontSize: 12,
    color: 'white',
    textAlign: 'center'
  },
  titolGrafic: {
    fontFamily: 'PoppinsSemibold',
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  },
  scroll: {
    textDecorationLine: 'none'
  },
  grafic1: {
    paddingRight: 40,
    marginLeft: 40,
    paddingTop: 30,
    borderRadius: 10
  },
  grafic2: {
    paddingRight: 55,
    marginLeft: 55,
    paddingTop: 30,
    borderRadius: 10
  }
});

export default Grafic;
