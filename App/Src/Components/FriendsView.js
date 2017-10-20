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
import {
  Button,
  Card,
  Form,
  Item,
  Input,
  H1,
  H2,
  H3,
  CardItem,
  Body,
  Icon,
  Container,
  Tabs,
  Tab,
  TabHeading
} from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";
import TopBar from "./TopBar.js";
import BottomBar from "./BottomBar.js";
import Friend from "./Friend.js";

const FriendsView = () =>
  <Container style={{ flex: 1 }}>
    <TopBar location="Add Friends" />

    <Tabs style={{ marginTop: 50 }} tabBarUnderlineStyle={{ backgroundColor: colors.primaryDark }}>
      <Tab
        style={{ backgroundColor: colors.background }}
        heading={
          <TabHeading style={{ padding: 10, backgroundColor: colors.secondary }}>
            <Text style={{ color: colors.secondaryText }}>All Users</Text>
          </TabHeading>
        }
      >
        <ScrollView>
          <View style={styles.friendSearchFormContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              // value={this.state.searchFriendsText}
              onChangeText={text => {
                // this._setSearchFriendsText(text);
              }}
            />
          </View>
          <Friend />
        </ScrollView>
      </Tab>
      <Tab
        style={{ backgroundColor: colors.background }}
        heading={
          <TabHeading style={{ backgroundColor: colors.secondary }}>
            <Text style={{ color: colors.secondaryText }}>My Contacts</Text>
          </TabHeading>
        }
      >
        <ScrollView>
          <View style={styles.friendSearchFormContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              // value={this.state.searchFriendsText}
              onChangeText={text => {
                // this._setSearchFriendsText(text);
              }}
            />
          </View>
          <Friend />
        </ScrollView>
      </Tab>
      <Tab
        style={{ backgroundColor: colors.background }}
        heading={
          <TabHeading style={{ backgroundColor: colors.secondary }}>
            <Text style={{ color: colors.secondaryText }}>Added Me</Text>
          </TabHeading>
        }
      >
        <ScrollView>
          <View style={styles.friendSearchFormContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              // value={this.state.searchFriendsText}
              onChangeText={text => {
                // this._setSearchFriendsText(text);
              }}
            />
          </View>
          <Friend />
        </ScrollView>
      </Tab>
    </Tabs>
    <BottomBar friends={{ color: colors.primaryDark }} />
  </Container>;

const styles = StyleSheet.create({
  friendSearchFormContainer: {
    borderColor: colors.secondaryDark,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    height: 50
    // marginBottom: 0,
    // flex: 5
    // height: 50
  },
  textInput: {
    flex: 1,
    marginLeft: 10
  },

  currentFriendsListContainer: {
    flex: 8,
    // borderColor: '#f0f0f5',
    // borderWidth: 2,
    margin: 0
  },
  noFriendsView: {
    alignItems: "center",
    marginTop: 20
  }
});

export default FriendsView;
