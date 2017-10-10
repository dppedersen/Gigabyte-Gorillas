import React, { Component } from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";
import configureStore from "./Src/Store/ConfigureStore";
import Router from "./Src/Containers/RouterContainer";

const store = configureStore({});
console.disableYellowBox = true;
const App = () =>
  <Provider store={store}>
    <Router />
  </Provider>;

AppRegistry.registerComponent("App", () => App);

const state = {
  user: {
    token: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notificationsActive: "",
    friends: [],
    challenges: [{}]
  }
};
