import React from "react";
import { StyleSheet, Text, ScrollView, View} from "react-native";
import { Chart } from "../Chart/Chart";

const dataContinents = {
  labels: ["Europa", "Àfrica", "Oceania", "Amèrica", "Àsia"],
  datasets: [
    {
      data: [83, 5, 45, 55, 70],
    },
  ],
};

const dataEspanya = {
  labels: ["Granada", "Barcelona", "Madrid", "Sevilla", "Bilbao"],
  datasets: [
    {
      data: [20, 60, 63, 40, 10],
    },
  ],
};

const Grafic = () => {
  return (
    <ScrollView >
      <View style={styles.container}>
      <Text>cONTINENTE</Text>
      <Chart style={styles.chartContainer} data={dataContinents} />
      <Text>España</Text>
      <Chart data={dataEspanya} />
      <Chart data={dataEspanya}/>
      <Chart data={dataEspanya}/>
      <Chart data={dataEspanya}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Grafic;
