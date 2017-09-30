import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import { Actions } from "react-native-router-flux";
import colors from "./../ColorPalette.js";
import ChallengeChart from "./Chart.js";
import PhotoMap from "./PhotoMap.js";
import TopBar from "./TopBar.js";

const { width } = Dimensions.get("window");
const photoWidth = (width - 4 * 5) / 3;

const FullChallengeView = () =>
  <View style={styles.container}>
    <TopBar />
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.vsLine}>
        <View style={styles.userContainer}>
          <Image source={require("./../Assets/dp.jpg")} style={styles.profileImage} />
          <Text style={styles.usernameText}>dppedersen</Text>
        </View>
        <View style={styles.vsTextContainer}>
          <H1 style={StyleSheet.flatten(styles.vsText)}>vs.</H1>
        </View>
        <View style={styles.userContainer}>
          <Image source={require("./../Assets/nf.jpg")} style={styles.profileImage} />
          <Text style={styles.usernameText}>natemar</Text>
        </View>
      </View>
      <H1 style={{ fontWeight: "bold" }}>
        You are <Text style={{ color: "red", fontStyle: "italic" }}>losing</Text> by 7.
      </H1>
      <View style={styles.daysLiftedContainer}>
        <View
          style={{ alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}
        >
          <H1>223</H1>
          <Text style={{ fontStyle: "italic" }}>Days Lifted:</Text>
          <H1>230</H1>
        </View>
      </View>
      <ChallengeChart style={styles.chart} lineStyle={styles.lineStyle} />
      <H1>Photos:</H1>
      <PhotoMap containerStyle={styles.photoMapContainerStyle} imageStyle={styles.photoMapImageStyle} />
    </ScrollView>
  </View>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "flex-start"
  },

  scrollView: {
    alignItems: "center"
  },
  vsLine: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center"
  },
  userContainer: {
    alignItems: "center",
    margin: 10
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  usernameText: {
    fontWeight: "bold",
    margin: 5,
    color: colors.primaryText
  },
  vsTextContainer: {
    justifyContent: "center"
  },
  vsText: {
    color: colors.primaryText,
    fontStyle: "italic"
  },
  daysLiftedContainer: {
    backgroundColor: colors.secondaryDark,
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15
  },
  chart: {
    flex: -1,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 350,
    alignSelf: "center"
    // margin: 20
    // padding: 10,

    // width: "80%"
  },
  lineStyle: {
    width: "80%"
  },
  photoMapContainerStyle: {
    borderColor: "#f0f0f5",
    margin: 0,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  photoMapImageStyle: {
    width: photoWidth,
    height: photoWidth,
    marginTop: 5,
    marginLeft: 5
    // borderRadius: 5,
  }
});

export default FullChallengeView;
