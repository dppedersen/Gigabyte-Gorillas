import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Text, View, Dimensions, StyleSheet, TouchableHighlight, StatusBar } from "react-native";
import { bindActionCreators } from "redux";
import Camera from "react-native-camera";
import { ActionCreators } from "./../Actions/ActionCreators";
import { Button, Icon } from "native-base";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";
import { Actions, ActionConst } from "react-native-router-flux";
import GotPhotoModal from "./../Components/GotPhotoModal";
import colors from "./../ColorPalette";
import BottomBar from "./../Components/BottomBar.js";

const CameraView = ({ takePicture }) =>
  <View style={{ flex: 1 }}>
    <StatusBar hidden={true} />
    <Camera
      ref={cam => {
        this.camera = cam;
      }}
      captureTarget={Camera.constants.CaptureTarget.memory}
      captureQuality="medium"
      style={styles.preview}
      aspect={Camera.constants.Aspect.fill}
    >
      <BottomBar camera={{ color: colors.primaryDark }} />
    </Camera>
  </View>;

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonsContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
    borderRadius: 0,
    alignSelf: "stretch",
    backgroundColor: colors.primaryDark,
    paddingTop: 5,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  gotPhotoModal: {
    justifyContent: "center"
  }
});

export default CameraView;
