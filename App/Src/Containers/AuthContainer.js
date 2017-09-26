import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert } from "react-native";
import { auth } from "../Actions/AuthActions.js";
import { facebookLogin } from "../Actions/FacebookActions";
import Login from "../Components/FbLogin.js";
import LoginView from "../Components/LoginView.js";
import SignupView from "../Components/SignupView";

class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      route: "SignUp",
      username: "",
      password: "",
      email: ""
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
    let alt = this.state.route === "Login" ? "SignUp" : "Login";
    this.setState({ route: alt, username: "", password: "", email: "" });
  }

  updateText(e) {
    this.setState({ username: })
    console.log(e);
  }

  render() {
    return this.state.route === "Login"
      ? <LoginView
          disabledButton={() => this.disabledButton()}
          userLogin={() => this.userLogin()}
          toggleRoute={() => this.toggleRoute()}
          facebookLogin={() => this.facebookLogin()}
        />
      : <SignupView
          disabledButton={() => this.disabledButton()}
          userLogin={() => this.userLogin()}
          toggleRoute={() => this.toggleRoute()}
          facebookLogin={() => this.facebookLogin()}
        />;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ auth, facebookLogin }, dispatch);
};

export default connect(mapDispatchToProps)(Auth);
