import React, { Component } from "react";
import {
  TouchableOpacity,
  Alert,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, H3, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";

const TopBar = ({ location }) =>
  <View style={styles.topRowContainer}>
    <View style={styles.leftButtonContainer}>
      {location === "Challenge"
        ? <TouchableOpacity style={styles.backButton} onPress={() => Actions.challenges()}>
            <Icon name="arrow-back" style={StyleSheet.flatten(styles.icon)} />
          </TouchableOpacity>
        : null}
    </View>
    <View style={styles.headerContainer}>
      <H3 style={StyleSheet.flatten(styles.headerText)}>
        {location === "Challenge" ? "Challenge" : location}
      </H3>
      {/* {location === "Challenge"
        ? <Image
            style={{
              height: 50,
              width: 135,
              marginTop: -25,
              marginBottom: 3,
              resizeMode: "contain"
            }}
            source={require("./../Assets/liftoff_bauhaus_transp.png")}
          />
        : null} */}
    </View>
    <View style={styles.rightButtonContainer} />
  </View>;

const styles = StyleSheet.create({
  topRowContainer: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    height: 50,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    paddingTop: 15
  },
  headerContainer: {
    alignSelf: "center"
  },
  headerText: {
    fontWeight: "bold",
    color: colors.primaryText
  },
  icon: {
    color: colors.primaryText
  },
  leftButtonContainer: {
    flex: 1
  },
  backButton: {
    top: 0,
    left: 10
  },
  rightButtonContainer: {
    flex: 1
  }
});
export default TopBar;
