import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chart } from '../Chart/Chart';

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
    <View>
      <Chart style={styles.chartContainer} data={dataContinents}/>
      <Chart data={dataEspanya}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    padding: 10
  }
});

export default Grafic;