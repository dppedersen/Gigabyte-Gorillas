import React, { Component } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";

const VsCard = () =>
  <Card style={StyleSheet.flatten(styles.card)}>
    <View style={styles.textContainer}>
      <Text style={styles.vsText}>vs. Mitt</Text>
      <Text style={styles.statusText}>Winning 50 to 40</Text>
    </View>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.challenge()}>
      <Text style={styles.detailsText}>DETAILS</Text>
      <Icon name="arrow-forward" style={StyleSheet.flatten(styles.arrowIcon)} />
    </TouchableOpacity>
  </Card>;

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 75
  },
  textContainer: {
    margin: 20
  },
  vsText: {
    fontSize: 20
  },
  statusText: {
    fontStyle: "italic",
    fontSize: 10,
    color: "green"
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  detailsText: {
    fontSize: 10,
    marginRight: 5
  },
  arrowIcon: {
    fontSize: 10,
    marginRight: 20
  }
});

export default VsCard;
