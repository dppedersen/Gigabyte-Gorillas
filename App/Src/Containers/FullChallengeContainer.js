import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FullChallengeView from "../Components/FullChallengeView.js";

class FullChallengeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <FullChallengeView />;
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FullChallengeContainer);
