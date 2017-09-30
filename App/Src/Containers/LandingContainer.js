import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, Image } from "react-native";
import { bindActionCreators } from "redux";
import { ActionCreators } from "./../Actions/ActionCreators";
import { Actions } from "react-native-router-flux";
import { H1 } from "native-base";

class Landing extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   timeout: false
    // };
    // setTimeout(this.noPersistTimeout.bind(this), 1000);
  }

  // componentDidUpdate() {
  //   //like the airport
  //   console.log("cdu token", this.props.user.token);
  //   if (this.props.user.token) {
  //     this.props.checkAuth(this.props.user.token);
  //   }
  // }

  // shouldComponentUpdate() {
  //   return this.props.user.token || this.state.timeout ? false : true;
  // }

  // noPersistTimeout() {
  //   if (!this.props) {
  //     setTimeout(this.noPersistTimeout.bind(this), 1000);
  //   } else if (!this.props.routes.scene.sceneKey === "landing") {
  //     return;
  //   } else if (this.props.routes.scene.sceneKey === "landing") {
  //     this.props.landingTimeout(this.props.user.token, this.props.routes.scene.title);
  //   }
  // }

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    console.log("landing render isloggedin", this.props.auth.isLoggedIn);
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./../Assets/liftoff_bauhaus_transp.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  },
  logo: {
    height: 100,
    width: 200,
    marginBottom: 200
  }
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

const mapStateToProps = (state, ownProps) => {
  return {
    routes: state.routes,
    user: state.user.userData,
    auth: state.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
