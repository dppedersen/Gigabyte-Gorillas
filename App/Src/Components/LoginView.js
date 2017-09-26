import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image } from "react-native";
import { Button, Card, Form, Item, Input, H1, CardItem, Body } from "native-base";
import Login from "../Components/FbLogin.js";
import colors from "./../ColorPalette";

class LoginView extends Component {
  render() {
    let enableAuth =
      this.props.username.length >= 3 && this.props.password.length >= 6 ? "" : "disabled";
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Image
              style={{
                height: 50,
                width: 200,
                marginBottom: 0,
                resizeMode: "contain"
              }}
              source={{
                uri: "https://s3.us-east-2.amazonaws.com/tgoc99habit/tendensee-logo-1000.png"
              }}
            />
          </View>
          <View style={styles.formContainer}>
            <Form>
              <Item
                regular
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  backgroundColor: colors.primaryText
                }}
              >
                <Input
                  placeholder="   Username"
                  autoCapitalize="none"
                  value={this.state.username}
                  onChangeText={text => this.setState({ username: text })}
                />
              </Item>
              <View style={emailMargin} />
              <View style={{ margin: 6 }} />
              <Item
                regular
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  backgroundColor: colors.primaryText
                }}
              >
                <Input
                  secureTextEntry={true}
                  color="white"
                  autoCapitalize="none"
                  placeholder="   Password"
                  value={this.state.password}
                  onChangeText={text => this.setState({ password: text })}
                />
              </Item>
            </Form>
            <View style={styles.successButton}>
              {enableAuth
                ? <Button
                    block
                    style={{ backgroundColor: colors.primaryLight }}
                    onPress={() => this.userLogin()}
                  >
                    <Text style={[{ fontSize: 16 }, styles.buttonText]}>
                      {this.state.route}
                    </Text>
                  </Button>
                : <Button
                    block
                    style={{ backgroundColor: colors.primaryLight }}
                    onPress={() => this.disabledButton()}
                  >
                    <Text style={styles.buttonText}>
                      {this.state.route}
                    </Text>
                  </Button>}
            </View>
            <View style={styles.successButton}>
              <Login
                {...this.props}
                onFacebookLoginPressed={this.onFacebookLoginPressed.bind(this)}
              />
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button transparent onPress={e => this.toggleRoute()}>
                <Text style={{ alignSelf: "center", color: "white" }}>Sign Up For an Account</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0277bd",
    marginTop: 90
  },
  formContainer: {
    alignSelf: "stretch",
    margin: 30
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#0277bd"
  },
  successButton: {
    marginTop: 12
  },
  buttonText: {
    color: "white"
  }
});
