import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import BottomBar from "./BottomBar.js";
import TopBar from "./TopBar.js";
import NewLiftOffButton from "./NewLiftOffButton";
import VsCard from "./VsCard.js";

const ChallengesListView = ({ viewChallenge, addChallenge }) =>
  <View style={styles.container}>
    <TopBar location="Challenges" />
    <View style={styles.challengesContainer}>
      <VsCard />
    </View>
    <View style={styles.startButtonContainer}>
      <NewLiftOffButton style={styles.startButton} textStyle={styles.startButtonText} />
    </View>
    <BottomBar challenges={{ color: colors.primaryDark }} />
  </View>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.secondaryDark,
    flex: 1,
    justifyContent: "flex-start"
  },
  challengesContainer: {
    width: "96%",
    marginTop: 55
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
