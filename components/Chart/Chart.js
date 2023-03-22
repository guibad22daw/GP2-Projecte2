import { BarChart } from "react-native-chart-kit";

export const Chart = (props) => {
  

  return (
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
          borderRadius: 13,
        },
      }}
    />
  );
};
