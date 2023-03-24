import { BarChart } from "react-native-chart-kit";
import { StyleSheet, View, Dimensions} from "react-native";

export const Chart = (props) => {
  const styles = StyleSheet.create({
    container: {
      margin: 15,
    },
  });

  return (
    <View style={styles.container}>
      <BarChart
        data={props.data}
        width={Dimensions.get('window').width-40}
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
        }}style={props.style}
      />
    </View>
  );
};
