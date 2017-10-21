import React, { Component } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Switch,
  TouchableOpacity
} from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";
import TopBar from "./TopBar.js";
import BottomBar from "./BottomBar.js";

// ImageShow() {
//   ImagePicker.showImagePicker(options, (response) => {
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     }
//     else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     }
//     else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//     }
//     else {
//       this.handlePhoto(response.data);
//     }
//   });
// }
//
// const options = {
//   title: 'Select Photo',
//   quality: .2,
//   customButtons: [
//     {name: 'fb', title: 'Choose Photo from Facebook'},
//     {name:'instagram', title: 'Choose Photo from Instagram'}
//   ],
//   storageOptions: {
//     skipBackup: false,
//     path: 'images'
//   }
// };
//
//
// handlePhoto = (photo) => {
//   this.props.updatePhoto(photo, this.props.user, this.props.habits);
// };
//
// isValidateEmail(promptValue){
//   var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return email.test(promptValue);
// };

const SettingsView = ({ username, firstName, lastName, phoneNumber }) =>
  <View style={styles.container}>
    <TopBar location="Settings" />
    <View style={styles.userContainer}>
      <Image source={require("./../Assets/dp.jpg")} style={styles.profileImage} />
      <View style={{ flexDirection: "column", paddingLeft: 5 }}>
        <Text style={styles.usernameText}>dppedersen</Text>
        <Text style={styles.editPhotoText}>Edit profile photo</Text>
      </View>
    </View>

    <View style={styles.firstNameContainer}>
      <Text style={styles.firstNameText}>First Name:</Text>
      <View style={styles.formContainer}>
        <Form>
          <Item style={StyleSheet.flatten(styles.formItem)}>
            <Input
              value={"Duncan"}
              onChangeText={text => {
                this.updateState("firstName", text);
              }}
            />
          </Item>
        </Form>
      </View>
    </View>
    <View style={styles.lastNameContainer}>
      <Text style={styles.lastNameText}>Last Name:</Text>
      <View style={styles.formContainer}>
        <Form>
          <Item style={StyleSheet.flatten(styles.formItem)}>
            <Input
              value={"Pedersen"}
              onChangeText={text => {
                this.update("lastName", text);
              }}
            />
          </Item>
        </Form>
      </View>
    </View>
    <View style={styles.emailContainer}>
      <Text style={styles.emailText}>E-mail:</Text>
      <View style={styles.formContainer}>
        <Form>
          <Item style={StyleSheet.flatten(styles.formItem)}>
            <Input
              value={"pedersen.duncan@gmail.com"}
              onChangeText={text => {
                this.update("email", text);
              }}
            />
          </Item>
        </Form>
      </View>
    </View>
    <View style={styles.phoneNumberContainer}>
      <Text style={styles.phoneNumberText}>Phone Number:</Text>
      <View style={styles.formContainer}>
        <Form>
          <Item style={StyleSheet.flatten(styles.formItem)}>
            <Input
              value={"8608038095"}
              onChangeText={text => {
                this.update("phoneNumber", text);
              }}
            />
          </Item>
        </Form>
      </View>
    </View>
    <View style={styles.notificationsContainer}>
      <Text>Silence Notifications:</Text>
      <Switch />
    </View>
    <View style={styles.saveChangesContainer}>
      <Button primary>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Button>
    </View>
    <View style={styles.accountSettingsContaienr}>
      <TouchableOpacity>
        <Text style={styles.accountSettingsText}>Account Settings</Text>
      </TouchableOpacity>
    </View>
    <BottomBar settings={{ color: colors.primaryDark }} />
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  userContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    marginTop: 60,
    padding: 5
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  editPhotoText: {
    fontStyle: "italic",
    fontSize: 10
  },
  usernameText: {
    fontWeight: "bold",
    fontSize: 15,
    color: colors.secondaryText
  },
  usernameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    marginTop: 80,
    marginBottom: 0
  },
  firstNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20
  },
  lastNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  },
  emailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  phoneNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20
  },
  formContainer: {
    flex: 2
  },
  formItem: {
    marginLeft: 15,
    height: 50
  },
  notificationsContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20
  },
  saveChangesContainer: {
    marginTop: 30,
    margin: 20,
    marginBottom: 35
  },
  buttonText: {
    color: "white"
  },
  accountSettingsContaienr: {},
  accountSettingsText: {
    color: "black",
    textDecorationLine: "underline"
  }
});

export default SettingsView;
