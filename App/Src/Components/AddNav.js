import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "native-base";

export const AddNav = props =>
  <TouchableOpacity
    onPress={() => {
      this.props.onPress();
    }}
  >
    <Icon style={this.props.style} name="add-circle" />
  </TouchableOpacity>;
