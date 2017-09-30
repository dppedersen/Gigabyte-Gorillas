import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body } from "native-base";
import colors from "./../ColorPalette.js";

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(arr);

const PhotoMap = ({ containerStyle, imageStyle }) =>
  <View style={containerStyle}>
    {arr.map(x => {
      console.log("x", x);
      return (
        // <TouchableOpacity onPress={() => this.props.onPressPhoto(image)}>
        <Image source={require("./../Assets/rd.jpg")} style={imageStyle} />
        // </TouchableOpacity>
      );
    })}
  </View>;

export default PhotoMap;
