import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, H3, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";

const TopBar = ({ location }) =>
  <View style={styles.topRowContainer}>
    <View style={styles.leftButtonContainer} />
    <View style={styles.headerContainer}>
      {location === "settings"
        ? <H3 style={StyleSheet.flatten(styles.headerText)}>Settings</H3>
        : <H3 style={StyleSheet.flatten(styles.headerText)}>Challenges</H3>}
      {/* // <Image
        //     style={{
        //       height: 50,
        //       width: 135,
        //       marginTop: -10,
        //       marginBottom: 3,
        //       resizeMode: "contain"
        //     }}
        //     source={require("./../Assets/liftoff_bauhaus_transp.png")}
        //   />} */}
    </View>
    <View style={styles.rightButtonContainer} />
  </View>;

const styles = StyleSheet.create({
  topRowContainer: {
    backgroundColor: colors.secondary,
    flexDirection: "row",
    height: 40,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  },
  headerContainer: {
    alignSelf: "center"
  },
  headerText: {
    fontWeight: "bold",
    // fontStyle: "italic",
    color: colors.secondaryText
  },
  icon: {
    color: colors.secondaryText
  },
  leftButtonContainer: {
    flex: 1
  },
  rightButtonContainer: {
    flex: 1
  }
});
export default TopBar;
