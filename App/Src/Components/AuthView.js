import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image } from "react-native";
import { Button, Card, Form, Item, Input, H1, CardItem, Body } from "native-base";
import FbLoginButton from "../Components/FbLogin.js";
import colors from "./../ColorPalette";

const AuthView = ({
  username,
  password,
  email,
  userLoginAction,
  toggleRoute,
  facebookLoginAction,
  updateText,
  authDisabledAlert,
  authEnabled,
  switchScreenText,
  route
}) =>
  <View style={styles.container}>
    <Image style={styles.appLogo} source={require("./../Assets/liftoff_bauhaus_transp.png")} />
    <Form>
      <Item regular style={StyleSheet.flatten(styles.formInput)}>
        <Input
          placeholder="Username"
          autoCapitalize="none"
          value={username}
          autoCorrect={false}
          onChangeText={text => updateText(text, "username")}
        />
      </Item>
      <Item
        regular
        style={route === "Sign Up" ? StyleSheet.flatten(styles.formInput) : StyleSheet.flatten(styles.displayNone)}
      >
        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          autoCorrect={false}
          onChangeText={text => updateText(text, "email")}
        />
      </Item>
      <Item regular style={StyleSheet.flatten(styles.formInput)}>
        <Input
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Password"
          value={password}
          autoCorrect={false}
          onChangeText={text => updateText(text, "password")}
        />
      </Item>
    </Form>
    <Button
      block
      style={authEnabled ? StyleSheet.flatten(styles.authButtonEnabled) : StyleSheet.flatten(styles.authButtonDisabled)}
      onPress={authEnabled ? () => userLogin() : () => disabledLoginAlert()}
    >
      <Text
        style={
          authEnabled
            ? StyleSheet.flatten(styles.authButtonTextEnabled)
            : StyleSheet.flatten(styles.authButtonTextDisabled)
        }
      >
        {route}
      </Text>
    </Button>
    {/* <FbLoginButton onFacebookLoginPressed={() => facebookLogin()} /> */}
    <View style={styles.switchScreenButtonView}>
      <Button transparent onPress={() => toggleRoute()}>
        <Text style={styles.switchScreenText}>
          {switchScreenText}
        </Text>
      </Button>
    </View>
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: "stretch"
  },
  appLogo: {
    height: 90,
    width: 140,
    resizeMode: "contain",
    marginTop: -20,
    alignSelf: "center"
  },
  formInput: {
    margin: 4,
    borderRadius: 10,
    backgroundColor: colors.primaryText
  },
  authButtonEnabled: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "green"
  },
  authButtonDisabled: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.secondaryDark
  },
  authButtonTextEnabled: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: "bold"
  },
  authButtonTextDisabled: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: "bold"
  },
  switchScreenButtonView: {
    alignSelf: "center"
  },
  switchScreenText: {
    alignSelf: "center",
    color: colors.primaryText
  },
  displayNone: {
    display: "none"
  }
});

export default AuthView;
