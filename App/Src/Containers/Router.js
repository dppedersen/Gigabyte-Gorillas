import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Actions, Router, Scene, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../Actions/ActionCreators';
import Camera from './Camera';
import Habits from './Habits';
import IndividualHabit from './IndividualHabit';
import Auth from './Auth';
import UserProfile from '../Components/UserProfile';
import Setting from './Setting';
import Landing from './Landing';

const ReduxRouter = connect()(Router);

class AppRouter extends Component {

  render() {

    return (
      <ReduxRouter>
        <Scene key='root'>
          <Scene key='landing' component={Landing} title='Landing' passProps={true} hideNavBar={true} />
          <Scene key='auth' component={Auth} title='Signup' passProps={true} hideNavBar={true} />
          <Scene key='camera' titleProps={{order:1}} component={Camera} title='Capture Your Habit' passProps={true} animation='leftToRight' />
          <Scene key='habits' titleProps={{order:2}} component={Habits} title='Your Habits!' passProps={true} />
          <Scene key='setting' titleProps={{order:3}} component={Setting} title='Setting Page' passProps={true} />
          <Scene key='individualHabit' component={IndividualHabit} title='Habit Page' passProps={true} hideNavBar={true} />
        </Scene>
      </ReduxRouter>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(ActionCreators, dispatch)
);

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.userData,
    auth: state.auth
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
