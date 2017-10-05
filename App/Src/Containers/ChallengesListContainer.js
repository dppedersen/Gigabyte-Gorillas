import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ChallengesListView from "../Components/ChallengesListView.js";

class ChallengesListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  viewChallenge() {}

  render() {
    return <ChallengesListView />;
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesListContainer);
