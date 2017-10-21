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
    <View style={styles.usersContainer}>
      <View style={styles.userContainer}>
        <Image source={require("./../Assets/dp.jpg")} style={styles.userImage} />
        <Text style={styles.usernameText}>dppedersen</Text>
      </View>
      <View style={styles.userContainer}>
        <Image source={require("./../Assets/nf.jpg")} style={styles.userImage} />
        <Text style={styles.usernameText}>natemar</Text>
      </View>
    </View>
    <Tabs style={StyleSheet.flatten(styles.tabs)} tabBarUnderlineStyle={{ backgroundColor: colors.primaryDark }}>
      <Tab
        style={{ backgroundColor: colors.background }}
        heading={
          <TabHeading style={StyleSheet.flatten(styles.tabHeading)}>
            <Text style={{ color: colors.secondaryText }}>Statistics</Text>
          </TabHeading>
        }
      >
        <ScrollView>
          <View style={styles.friendSearchFormContainer}>
            <ChallengeChart />
          </View>
        </ScrollView>
      </Tab>
      <Tab
        style={{ backgroundColor: colors.background }}
        heading={
          <TabHeading style={{ backgroundColor: colors.secondary }}>
            <Text style={{ color: colors.secondaryText }}>Photos</Text>
          </TabHeading>
        }
      >
        <ScrollView>
          <View style={styles.friendSearchFormContainer}>
            <PhotoMap containerStyle={styles.photoMapContainerStyle} imageStyle={styles.photoMapImageStyle} />
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
  usersContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    backgroundColor: "lightgray",
    padding: 15
  },
  userContainer: {
    alignItems: "center"
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  usernameText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  tabs: {
    // marginTop: 50
  },
  tabHeading: {
    padding: 10,
    backgroundColor: colors.secondary
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
