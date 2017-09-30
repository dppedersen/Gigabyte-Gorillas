import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";

const TopBar = () =>
  <View style={styles.topRowContainer}>
    <View style={styles.leftButtonContainer}>
      <Button
        dark
        transparent
        iconCenter
        onPress={() => {
          Actions.images();
        }}
      >
        <Icon name="arrow-back" style={StyleSheet.flatten(styles.icon)} />
      </Button>
    </View>
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
    <View style={styles.rightButtonContainer}>
      <Button dark transparent iconCenter style={{ alignSelf: "flex-end" }}>
        <Icon name="settings" style={StyleSheet.flatten(styles.icon)} />
      </Button>
    </View>
  </View>;

const styles = StyleSheet.create({
  topRowContainer: {
    backgroundColor: colors.primaryDark,
    alignSelf: "stretch",
    flexDirection: "row",
    margin: 0,
    marginBottom: 0,
    justifyContent: "space-between"
  },
  headerContainer: {
    alignSelf: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.primaryText
  },
  icon: {
    color: colors.primaryText
  },
  leftButtonContainer: {
    flex: 1
  },
  rightButtonContainer: {
    flex: 1
  }
});

export default TopBar;
