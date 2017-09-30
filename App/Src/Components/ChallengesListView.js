import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import BottomBar from "./BottomBar.js";

const ChallengesListView = ({ viewChallenge, addChallenge }) =>
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Image
        style={{
          height: 50,
          width: 135,
          marginTop: -10,
          marginBottom: 3,
          resizeMode: "contain"
        }}
        source={require("./../Assets/liftoff_bauhaus_transp.png")}
      />
    </View>
    <BottomBar />
  </View>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "flex-start"
  },
  headerContainer: {
    alignSelf: "center",
    backgroundColor: colors.primaryDark,
    alignSelf: "stretch",
    alignItems: "center"
  }
});

export default ChallengesListView;
