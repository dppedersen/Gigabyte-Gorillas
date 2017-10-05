import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, Image, ScrollView, TextInput, Dimensions, StatusBar } from "react-native";
import { bindActionCreators } from "redux";
import { Button, Card, Form, Item, Input, H1, H2, H3, CardItem, Body, CheckBox, Icon, Container } from "native-base";
import Modal from "react-native-modal";
import { Actions } from "react-native-router-flux";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import { ActionCreators } from "./../Actions/ActionCreators";
import Friend from "./../Components/FriendsListItem";
import UserView from "./../Components/UserView";
import Camera from "./CameraContainer";
import Swiper from "react-native-swiper";
import colors from "./../ColorPalette";
import BottomBar from "./../Components/BottomBar.js";
import ProfileView from "./../Components/ProfileView.js";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ProfileView />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.userData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
