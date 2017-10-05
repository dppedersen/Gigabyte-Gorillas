import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";

const NewLiftOffButton = ({ style, textStyle, openNewLiftOffModal }) =>
  <Button light block onPress={() => Actions.newLiftOff()} style={StyleSheet.flatten(style)}>
    <Icon large name="pulse" />
  </Button>;

export default NewLiftOffButton;
