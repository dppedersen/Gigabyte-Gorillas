import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-native-modal";
import { ActionCreators } from "./../Actions/ActionCreators";
import NotificationsView from "./../Components/NotificationsView.js";

class NotificationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <NotificationsView />;
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
