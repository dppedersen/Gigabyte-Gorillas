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

const FriendsView = () =>
  <Container>
    <View style={styles.screenAboveTabs}>
      <TopBar />
      <View style={styles.userInfo}>
        <View style={styles.userPictureContainer}>
          <Image
            source={{
              uri:
                this.props.user.user && this.props.user.user.photo !== "NO_PHOTO"
                  ? this.props.user.user.photo
                  : "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/marty-mcfly-512.png"
            }}
            style={styles.userImage}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.usernameContainer}>
            <Text style={styles.usernameText}>
              {this.props.user.user ? this.props.user.user.username : null}
            </Text>
          </View>
          <View style={styles.taglineContainer}>
            {/* <Text style={styles.taglineText}>{this.props.user.user ? this.props.user.user.tagline : null}</Text> */}
            <Text style={styles.taglineText}>
              {this.props.user.user
                ? `${this.props.user.habits.length} Habits, ${this.props.images.length} Photos, ${this.props.friends
                    .length} Friends`
                : null}
            </Text>
          </View>
        </View>
      </View>
    </View>
    <ModalRoot />
    <Tabs tabBarUnderlineStyle={{ backgroundColor: colors.primaryDark }}>
      <Tab
        style={{ backgroundColor: colors.background }}
        heading={
          <TabHeading style={{ padding: 10, backgroundColor: colors.secondary }}>
            <Text style={{ color: colors.secondaryText }}>Photos</Text>
          </TabHeading>
        }
      >
        <ScrollView>
          <View style={styles.habitImages}>
            {this.props.images.length === 0
              ? <View style={styles.noImagesView}>
                  <H3
                    style={{
                      color: "#cccccc",
                      flex: 1,
                      alignSelf: "center"
                    }}
                  >
                    No images :/
                  </H3>
                </View>
              : this.props.images.map(image => {
                  return (
                    <TouchableOpacity onPress={() => this.props.onPressPhoto(image)}>
                      <Image source={{ uri: image.picture }} style={styles.habitImage} />
                    </TouchableOpacity>
                  );
                })}
          </View>
        </ScrollView>
      </Tab>
      <Tab
        style={{ backgroundColor: colors.background }}
        heading={
          <TabHeading style={{ backgroundColor: colors.secondary }}>
            <Text style={{ color: colors.secondaryText }}>Friends</Text>
          </TabHeading>
        }
      >
        <View style={styles.friendsTabContainer}>
          {this.props.isSelf &&
            <View style={styles.friendSearchFormAndButton}>
              <View style={styles.friendSearchFormContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Search"
                  value={this.state.searchFriendsText}
                  onChangeText={text => {
                    this._setSearchFriendsText(text);
                  }}
                />
              </View>
              <View style={styles.addFriendsButtonContainer}>
                <Button
                  transparent
                  info
                  iconCenter
                  onPress={() => {
                    this.props.openModal();
                  }}
                >
                  <Icon name="add-circle" style={{ color: colors.primaryDark }} />
                </Button>
              </View>
            </View>}
          <ScrollView style={styles.currentFriendsListContainer}>
            {this.props.friends
              ? this.props.friends.length === 0
                ? <View style={styles.noFriendsView}>
                    <H3 style={{ color: "#cccccc" }}>No friends yet :(</H3>
                  </View>
                : this.props.allUsers
                    .filter(user => {
                      return this.props.friends.includes(user.id);
                    })
                    .filter(user => {
                      return user.username.toLowerCase().includes(this.state.searchFriendsText.toLowerCase());
                    })
                    .map(user => {
                      return (
                        <Friend
                          key={user.id}
                          isModalVisible={false}
                          user={user}
                          changeVisibleUser={this.props.changeVisibleUser}
                          deleteFriend={this.props.deleteFriend}
                          isSelf={this.props.isSelf}
                          closeModal={this.props.closeModal}
                        />
                      );
                    })
              : null}
          </ScrollView>
        </View>
      </Tab>
    </Tabs>
  </Container>;

const styles = StyleSheet.create({
  screenAboveTabs: {
    backgroundColor: "#F8F8F8"
  },
  topRowContainer: {
    backgroundColor: colors.primaryDark,
    alignSelf: "stretch",
    flexDirection: "row",
    margin: 0,
    marginBottom: 0,
    justifyContent: "space-between"
  },
  logo: {
    alignSelf: "center"
  },
  leftButtonContainer: {
    flex: 1
  },
  userPictureContainer: {
    flex: 0
  },
  rightButtonContainer: {
    flex: 1
  },
  userInfo: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.primary,
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  userImage: {
    marginRight: 10,
    borderRadius: 25,
    flex: 0,
    // resizeMode: 'contain',
    height: 50,
    width: 50,
    alignSelf: "center"
  },
  usernameContainer: {
    flex: 0,
    marginRight: 10
  },
  usernameText: {
    color: colors.primaryText,
    fontWeight: "bold",
    fontSize: 20
  },
  taglineContainer: {
    flex: 0
  },
  taglineText: {
    color: colors.primaryText,
    fontStyle: "italic",
    fontSize: 10
  },
  habitImages: {
    borderColor: "#f0f0f5",
    margin: 0,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  noImagesView: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    margin: 30,
    flex: 1
  },
  habitImage: {
    width: photoWidth,
    height: photoWidth,
    marginTop: 5,
    marginLeft: 5
    // borderRadius: 5,
  },
  friendsTabContainer: {
    flex: 1
  },
  friendSearchFormAndButton: {
    flexDirection: "row"
  },
  friendSearchFormContainer: {
    borderColor: colors.secondaryDark,
    borderWidth: 1,
    borderRadius: 1,
    margin: 5,
    marginBottom: 0,
    flex: 5
  },
  textInput: {
    flex: 1,
    marginLeft: 10
  },
  addFriendsButtonContainer: {
    alignItems: "center",
    justifyContent: "center"
    // marginLeft: -10,
    // marginTop: 15,
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
