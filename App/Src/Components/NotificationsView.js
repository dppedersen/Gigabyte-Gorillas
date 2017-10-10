import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import BottomBar from "./BottomBar.js";
import TopBar from "./TopBar.js";

const NotificationsView = () =>
  <View style={{ flex: 1 }}>
    <TopBar location="Notifications" />
    <View />
    <BottomBar />
  </View>;

export default NotificationsView;
