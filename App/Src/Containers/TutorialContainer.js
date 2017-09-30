import React, { Component, PropTypes } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class TutorialContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      contacts: ""
    };
  }

  storeNameAndPhoneNumber(name, phoneNumber) {}

  parseContacts() {}

  render() {
    return <View />;
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer);
