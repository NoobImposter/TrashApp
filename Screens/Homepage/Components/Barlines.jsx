import React from 'react';
import { View, Dimensions } from 'react-native';
import { ProgressChart } from "react-native-chart-kit";
import { GlobalStyles } from '../../Styles';

const Barlines = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const data = {
    labels: ["Swim", "Bike", "Run"],
    data: [0.8, 0.6, 0.8],
    colors: [
      (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // red
      (opacity = 1) => `rgba(54, 162, 235, ${opacity})`, // blue
      (opacity = 1) => `rgba(255, 206, 86, ${opacity})`, // yellow
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientFromOpacity: 1,
    backgroundGradientToOpacity: 1,
    color: (opacity = 100) => `rgba(1, 50, 23, ${opacity})`, // label color
    strokeWidth: 8,
    useShadowColorFromDataset: false,
  };

  return (
    <View  >
      <ProgressChart
        data={data}
        width={screenWidth*0.95}
        height={screenHeight * 0.45}
        strokeWidth={40}
        radius={60}
        chartConfig={chartConfig}
        hideLegend={true} // show labels if needed
      />
    </View>
  );
};

export default Barlines;
