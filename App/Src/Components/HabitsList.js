import React, { PropTypes } from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { Button, Icon } from "native-base";
import HabitBlock from "./HabitBlock";
import ModalRoot from "./ModalRoot";
var moment = require("moment");
import { Actions } from "react-native-router-flux";
import colors from "./../ColorPalette";

const HabitsList = ({ habits, editHabitDay, onPressHabit, editPast }) => {
  let toComplete = [];
  let alreadyCompleted = [];

  habits.forEach(habit => {
    console.log("inside habits");
    let toCategorize = habit.dates.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    let lastLoggedDay = toCategorize[0];

    if (lastLoggedDay) {
      let lastLogged = moment(lastLoggedDay.date).format("YYYY-MM-DD");
      let today = moment().format("YYYY-MM-DD");

      if (lastLogged === today) {
        alreadyCompleted.push(habit);
      } else {
        toComplete.push(habit);
      }
    } else {
      toComplete.push(habit);
    }
  });

  return (
    <View>
      <ScrollView style={styles.habitsList}>
        {toComplete.map(habit => {
          return (
            <HabitBlock
              key={habit.id}
              allHabits={habits}
              habit={habit}
              onPressHabit={onPressHabit}
              onPressNoPic={editPast}
              onPressPic={editHabitDay}
            />
          );
        })}
        {alreadyCompleted.map(habit => {
          return (
            <HabitBlock
              key={habit.id}
              allHabits={habits}
              habit={habit}
              onPressHabit={onPressHabit}
              onPressNoPic={editPast}
              onPressPic={editHabitDay}
            />
          );
        })}
        <ModalRoot />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Button
          transparent
          onPress={() => {
            Actions.images();
          }}
        >
          <Icon
            style={{ fontSize: 40, color: "white", opacity: 1 }}
            name="person"
          />
        </Button>
        <Button transparent onPress={() => Actions.camera()}>
          <Icon
            style={{ fontSize: 40, color: "white" }}
            name="radio-button-on"
          />
        </Button>
        <View
          style={{
            borderRadius: 25,
            borderBottomWidth: 3,
            borderBottomColor: "white",
            paddingBottom: 2
          }}
        >
          <Button
            transparent
            onPress={() => {
              Actions.habits();
            }}
          >
            <Icon style={{ fontSize: 50, color: "white" }} name="list" />
          </Button>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const palette = {
  primary: "#b71c1c",
  primaryLight: "#f05545",
  primaryDark: "#7f0000",
  secondary: "#263238",
  secondaryLight: "#4f5b62",
  secondaryDark: "#000a12",
  text: "#ffffff",
  background: "#f5f5f6"
};

const styles = StyleSheet.create({
  habitsList: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: colors.primary //colors.background, //colors.primaryLight,
  },

  buttonsContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
    borderRadius: 0,
    alignSelf: "stretch",
    backgroundColor: colors.primaryDark,
    paddingTop: 5,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
});

export default HabitsList;
