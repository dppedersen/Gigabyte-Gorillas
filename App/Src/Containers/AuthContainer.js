import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert } from "react-native";
import { auth } from "../Actions/AuthActions.js";
import { facebookLogin } from "../Actions/FacebookActions";
import AuthView from "../Components/AuthView.js";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "Sign Up",
      username: "",
      password: "",
      email: "",
      switchScreenText: "Log In Instead"
    };
  }

  facebookLogin() {
    this.props.actions.facebookLogin();
  }

  disabledButton() {
    this.state.username.length < 3
      ? Alert.alert("Username must be at least 3 characters")
      : Alert.alert("Password must be at least 6 characters");
  }

  userLogin() {
    this.props.auth(this.state.username, this.state.password, this.state.email, this.state.route);
  }

  toggleRoute() {
    let altRoute = this.state.route === "Log In" ? "Sign Up" : "Log In";
    let altSwitchText = this.state.route === "Log In" ? "Log In Instead" : "Sign Up Instead";
    this.setState({ route: altRoute, username: "", password: "", email: "", switchScreenText: altSwitchText });
  }

  updateText(value, field) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <AuthView
        username={this.state.username}
        password={this.state.password}
        email={this.state.email}
        disabledLoginAlert={this.disabledButton.bind(this)}
        userLoginAction={this.userLogin.bind(this)}
        toggleRoute={this.toggleRoute.bind(this)}
        facebookLogin={this.facebookLogin.bind(this)}
        updateTextAction={this.updateText.bind(this)}
        route={this.state.route}
        switchScreenText={this.state.switchScreenText}
        authEnabled={this.state.username.length > 0 && this.state.password.length > 0}
      />
    );
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ auth, facebookLogin }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
