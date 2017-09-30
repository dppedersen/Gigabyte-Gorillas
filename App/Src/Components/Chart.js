import { random, range } from "lodash";
import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Platform, Text } from "react-native";
import Svg from "react-native-svg";
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryStack,
  VictoryCandlestick,
  VictoryErrorBar,
  VictoryBar,
  VictoryLine,
  VictoryArea,
  VictoryScatter,
  VictoryTooltip,
  VictoryZoomContainer,
  VictoryVoronoiContainer,
  VictorySelectionContainer,
  VictoryTheme,
  VictoryBrushContainer,
  VictoryPie,
  createContainer
} from "victory-native";

export default class ChallengeChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style}>
        <VictoryChart>
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" }
            }}
            height={200}
            width={350}
            data={[{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 4 }, { x: 5, y: 7 }]}
          />
          <VictoryAxis />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary
  }
});
