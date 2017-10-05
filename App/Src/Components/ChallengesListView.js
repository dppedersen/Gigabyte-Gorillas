import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import BottomBar from "./BottomBar.js";
import TopBar from "./TopBar.js";
import NewLiftOffButton from "./NewLiftOffButton";

const ChallengesListView = ({ viewChallenge, addChallenge }) =>
  <View style={styles.container}>
    <TopBar />
    <Card style={StyleSheet.flatten(styles.card)}>
      <Text>Test</Text>
    </Card>
    <View style={styles.startButtonContainer}>
      <NewLiftOffButton style={styles.startButton} textStyle={styles.startButtonText} />
    </View>
    <BottomBar />
  </View>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.secondaryDark,
    flex: 1,
    justifyContent: "center"
  },
  card: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "96%"
  },
  startButtonContainer: {
    alignSelf: "stretch"
  },
  startButton: {
    margin: 15
  },
  startButtonText: {
    // color: "red"
  }
});

export default ChallengesListView;
