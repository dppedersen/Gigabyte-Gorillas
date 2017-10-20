import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";

const BottomBar = ({ settings, friends, camera, challenges, notifications }) =>
  <View style={styles.bottomBar}>
    <Button
      transparent
      onPress={() => {
        Actions.settings();
      }}
    >
      <Icon style={settings || StyleSheet.flatten(styles.icon)} name="settings" />
    </Button>
    <Button
      transparent
      onPress={() => {
        Actions.friends();
      }}
    >
      <Icon style={friends || StyleSheet.flatten(styles.icon)} name={"person-add" || "people"} />
    </Button>
    <Button transparent onPress={() => Actions.camera()}>
      <Icon style={camera || StyleSheet.flatten(styles.icon)} name={camera ? "radio-button-on" : "radio-button-off"} />
    </Button>
    <Button
      transparent
      onPress={() => {
        Actions.challenges();
      }}
    >
      <Icon style={challenges || StyleSheet.flatten(styles.icon)} name="pulse" />
    </Button>
    <Button
      transparent
      onPress={() => {
        Actions.notifications();
      }}
    >
      <Icon style={notifications || StyleSheet.flatten(styles.icon)} name="heart" />
    </Button>
  </View>;

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1.0,
    borderRadius: 0,
    alignSelf: "stretch",
    backgroundColor: colors.secondary,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 0
  },
  icon: {
    color: colors.primaryLight
  }
});

export default BottomBar;
