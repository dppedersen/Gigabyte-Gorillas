import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Dimensions, StatusBar } from "react-native";
import { bindActionCreators } from "redux";
import { Button, Card, Form, Item, Input, H1, H2, H3, CardItem, Body, CheckBox, Icon, Container } from "native-base";
import Modal from "react-native-modal";
import { Actions } from "react-native-router-flux";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import { ActionCreators } from "./../Actions/ActionCreators";
import Camera from "./CameraContainer";
import Swiper from "react-native-swiper";
import colors from "./../ColorPalette";
import BottomBar from "./../Components/BottomBar.js";
import SettingsView from "./../Components/SettingsView.js";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      phoneNumber: this.props.phoneNumber
    };
  }

  update(field, value) {
    this.setState({ [field]: value });
  }

  save() {}

  render() {
    return <SettingsView update={this.update.bind(this)} save={this.save.bind(this)} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    phoneNumber: state.user.phoneNumber
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
