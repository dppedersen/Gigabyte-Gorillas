import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Card, CheckBox, Button, Icon } from "native-base";
import colors from "./../ColorPalette";

const Friend = () =>
  <View style={styles.friendCard}>
    <View style={styles.photo}>
      <TouchableHighlight style={styles.touchableOpacity} underlayColor={colors.primary} onPress={() => {}}>
        <Image style={styles.image} source={require("./../Assets/nf.jpg")} />
      </TouchableHighlight>
    </View>
    <View style={styles.userInfo}>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>natemar</Text>
      </View>
      <View>
        <Text style={styles.quote}>Nate Foy</Text>
      </View>
    </View>
    <View style={styles.friendCheckbox}>
      <CheckBox style={{ color: colors.primaryDark }} checked={true} onPress={() => {}} />
    </View>
  </View>;

const styles = StyleSheet.create({
  friendCard: {
    backgroundColor: colors.secondaryLight,
    flex: 1,
    flexBasis: 0,
    flexShrink: 1,
    margin: 5,
    marginBottom: 0,
    flexDirection: "row",
    borderColor: "#d1d1e0",
    borderWidth: 1,
    justifyContent: "space-between",
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  photo: {
    flex: 1,
    margin: "auto",
    alignSelf: "center",
    paddingRight: 10
  },
  touchableOpacity: {
    flex: 1,
    borderRadius: 5
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  userInfo: {
    flex: 5,
    flexDirection: "column"
  },
  usernameContainer: {
    paddingBottom: 2
  },
  username: {
    color: colors.secondaryText,
    fontWeight: "bold",
    fontSize: 16
  },
  quote: {
    color: colors.secondaryText,
    fontStyle: "italic",
    fontSize: 8
  },
  friendCheckbox: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  }
});

export default Friend;
