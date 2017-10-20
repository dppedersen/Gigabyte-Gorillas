import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon, Tab, TabHeading, Tabs } from "native-base";
import { Actions } from "react-native-router-flux";
import colors from "./../ColorPalette.js";
import ChallengeChart from "./Chart.js";
import PhotoMap from "./PhotoMap.js";
import TopBar from "./TopBar.js";
import BottomBar from "./BottomBar.js";

const { width } = Dimensions.get("window");
const photoWidth = (width - 4 * 5) / 3;

const FullChallengeView = () =>
  <View style={styles.container}>
    <TopBar location="Challenge" />

    <Tabs style={{ marginTop: 40 }} tabBarUnderlineStyle={{ backgroundColor: colors.primaryDark }}>
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
        </ScrollView>
      </Tab>
    </Tabs>
    <BottomBar challenges={{ color: colors.primaryDark }} />
  </View>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1
  },

  scrollView: {
    alignItems: "center",
    margin: 40,
    flex: 1
  },
  vsLine: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center"
  },
  userContainer: {
    alignItems: "center",
    margin: 10
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  usernameText: {
    fontWeight: "bold",
    margin: 5
  },
  vsTextContainer: {
    justifyContent: "center"
  },
  vsText: {
    fontStyle: "italic"
  },
  daysLiftedContainer: {
    backgroundColor: colors.secondaryDark,
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15
  },
  chart: {
    flex: -1,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 350,
    alignSelf: "center"
    // margin: 20
    // padding: 10,

    // width: "80%"
  },
  lineStyle: {
    width: "80%"
  },
  photoMapContainerStyle: {
    borderColor: "#f0f0f5",
    margin: 0,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  photoMapImageStyle: {
    width: photoWidth,
    height: photoWidth,
    marginTop: 5,
    marginLeft: 5
    // borderRadius: 5,
  }
});

export default FullChallengeView;
