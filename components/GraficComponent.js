import { BarChart } from "react-native-chart-kit";
import { StyleSheet, View, Dimensions, Text, ActivityIndicator } from "react-native";
import styles from '../styles/GraficStyles';

export const Chart = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titolGrafic}>{props.titolGrafic}</Text>
      {
        props.loading == false ? (
          <View style={styles.container}>
            <BarChart
              data={props.data}
              width={Dimensions.get('window').width - 40}
              height={250}
              chartConfig={{
                backgroundColor: "",
                backgroundGradientFrom: "#5cc0d8",
                backgroundGradientTo: "#2196f3",
                decimalPlaces: 0,
                fillShadowGradient: 'white',
                fillShadowGradientFromOpacity: 0.8,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }} style={props.estilGrafic}
            />
          </View> )
          : <ActivityIndicator size="large" color="#2296f3" style={{ marginTop: 20 }} />
      }
    </View>
  );
};
