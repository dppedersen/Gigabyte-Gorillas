import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Actions, Router, Scene, ActionConst } from "react-native-router-flux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../Actions/ActionCreators";
import Camera from "./CameraContainer";
import Auth from "./AuthContainer";
import SettingsOld from "./SettingsContainerOld";
import Landing from "./LandingContainer";
import Settings from "./SettingsContainer";
import Challenges from "./ChallengesListContainer";
import Friends from "./FriendsContainer";
import Notifications from "./NotificationsContainer";
import Challenge from "./FullChallengeContainer";
import { Icon } from "native-base";

const ReduxRouter = connect()(Router);

class AppRouter extends Component {
  render() {
    return (
      <ReduxRouter
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        barButtonTextStyle={styles.barButtonTextStyle}
        barButtonIconStyle={styles.barButtonIconStyle}
      >
        <Scene key="root">
          <Scene key="landing" component={Landing} hideNavBar={true} title="Landing" passProps={true} initial={true} />
          <Scene key="auth" component={Auth} hideNavBar={true} title="Signup" passProps={true} />
          <Scene
            key="settings"
            component={Settings}
            title="Settings"
            hideNavBar={true}
            panHandlers={null}
            passProps={true}
            duration={0}
          />
          <Scene
            key="friends"
            component={Friends}
            title="Friends"
            hideNavBar={true}
            panHandlers={null}
            passProps={true}
            duration={0}
          />
          <Scene
            key="camera"
            component={Camera}
            hideNavBar={true}
            panHandlers={null}
            title="Camera"
            passProps={true}
            duration={0}
          />
          <Scene
            key="challenges"
            component={Challenges}
            hideNavBar={true}
            panHandlers={null}
            title="Challenges"
            passProps={true}
            duration={0}
          />
          <Scene
            key="challenge"
            component={Challenge}
            hideNavBar={true}
            panHandlers={null}
            title="Challenge"
            passProps={true}
            duration={0}
          />
          <Scene
            key="notifications"
            component={Notifications}
            hideNavBar={true}
            panHandlers={null}
            title="Notifications"
            passProps={true}
            duration={0}
          />
        </Scene>
      </ReduxRouter>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#1fb7e9"
  },
  navBarTitle: {
    color: "#FFFFFF"
  },
  barButtonTextStyle: {
    color: "#FFFFFF"
  },
  barButtonIconStyle: {
    tintColor: "rgb(255,255,255)"
  }
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.userData,
    auth: state.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
