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
import CameraView from "./../Components/CameraView.js";

// import { Accelerometer, Gyroscope } from 'react-native-sensors';
// let accelerationObservable;

class CameraContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // deleteActionRun: false,
      // accelerationObservable: null,
      habitProps: this.props.habitProps,
      habitDay: this.props.habitDay
    };
    console.log("camera constructor");
  }

  // componentWillMount() {
  //   console.log("helloooo cameraaa", this.props.user);
  //   let habits = this.props.habits.map(h => ({
  //     id: h.id,
  //     name: h.name,
  //     notification: h.notification
  //   }));
  //   console.log(habits);
  // }

  // onSwipeLeft() {
  //   Actions.habits();
  // }
  //
  // onSwipeRight() {
  //   Actions.images();
  // }

  // _deleteDateAndCloseModal() {
  //   this.props.deleteDay(this.props.currentPhoto);
  //   this.props.hideGotPhotoModal();
  // }

  render() {
    // if (accelerationObservable) {
    //   accelerationObservable
    //   .map(({ x, y, z }) => x + y + z)
    //   .filter(speed => speed > 1)
    //   .subscribe(speed => {
    //     if (!this.state.deleteActionRun) {
    //       accelerationObservable.stop();
    //       console.log('hi! this is acceleration');
    //       this._deleteDateAndCloseModal();
    //       this.setState({ deleteActionRun: true });
    //     }
    //   })
    // }
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
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
          <BottomBar />
        </Camera>
      </View>
    );
  }

  takePicture(d, h) {
    console.log("in tp");
    let options = {};
    this.camera
      .capture({ metadata: options })
      .then(data => {
        // Alert.alert('Got Photo!');
        let sendData = Object.assign({}, this.props.user, {
          data: data
        });
        this.props.sendPhoto(sendData, this.state.habitDay, this.props.habitProps);
        // this.setState({ deleteActionRun: false });
        // accelerationObservable = new Accelerometer({
        //   updateInterval: 2000
        // });
        // this.props.showPhotoCalculatingWithTimeout();
      })
      .catch(err => console.error(err));
  }
}

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

const mapStateToProps = state => {
  return {
    user: state.user.userData,
    auth: state.auth,
    currentPhoto: state.sendPhotos.currentPhoto,
    habits: state.user.userData.habits
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer);
