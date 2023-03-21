import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const povertyData = {
  labels: ['Europa', 'Àfrica', 'Oceania', 'Amèrica', 'Àsia'],
  datasets: [
    {
      data: [83, 5, 45, 55, 70],
    },
  ],
};

const Grafic = () => {
  return (
    <View>
      <BarChart
        data={povertyData}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Grafic;