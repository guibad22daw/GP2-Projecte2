import { BarChart } from "react-native-chart-kit";
import { StyleSheet, View} from "react-native";

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
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: "",
          backgroundGradientFrom: "#7cc0d8",
          backgroundGradientTo: "#2196f3",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 100, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            margin: 2,
          },
        }}
      />
    </View>
  );
};
