import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ImageBackground,
} from "react-native";
import { Chart } from "../Chart/Chart";
import styles from "./Styles";

// Dades de pobresa pel gràfic
const dataPobresa = {
  labels: ["Europa", "Àfrica", "Àsia", "Amèrica", "Oceania"],
  datasets: [
    {
      data: [21.7, 34, 27.5, 28.8, 26.9],
    },
  ],
};

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
  return (
    <View>
      <ImageBackground source={require("../../assets/img/barcelona.png")}>
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
            <Chart style={styles.chartContainer} data={dataPobresa} />
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
