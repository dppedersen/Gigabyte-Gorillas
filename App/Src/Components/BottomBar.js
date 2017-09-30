import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";

const BottomBar = () =>
  <View style={styles.bottomBar}>
    <Button
      transparent
      onPress={() => {
        Actions.images();
      }}
    >
      <Icon style={{ fontSize: 40, color: "white", opacity: 1 }} name="person" />
    </Button>
    <Button transparent onPress={() => Actions.camera()}>
      <Icon style={{ fontSize: 40, color: "white" }} name="radio-button-on" />
    </Button>
    <Button
      transparent
      onPress={() => {
        Actions.challenges();
      }}
    >
      <Icon style={{ fontSize: 40, color: "white" }} name="list" />
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
    backgroundColor: colors.primaryDark,
    paddingTop: 5,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
});

export default BottomBar;
