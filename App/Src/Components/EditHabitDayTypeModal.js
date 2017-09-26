import React, { PropTypes } from "react";
import { connect } from "react-redux";
import {
  Alert,
  Picker,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  Card,
  ActionSheet,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  H1,
  H3
} from "native-base";
import { editHabitDayType, hideModal } from "./../Actions/ModalActions";
import { updateDay, deleteDay } from "./../Actions/DayActions";
import Modal from "react-native-modal";
const moment = require("moment");
import colors from "./../ColorPalette";

const EditHabitDayTypeModal = ({ day, allHabits, habitProps, dispatch }) => {
  // Link up from database of different habits, should be habit names
  let BUTTONS = allHabits.map(h => h.name).concat(["Delete", "Cancel"]);
  let DESTRUCTIVE_INDEX = BUTTONS.length - 2;
  let CANCEL_INDEX = BUTTONS.length - 1;
  console.log("day", day);
  console.log("habitprops.id", habitProps.id);

  let habitIds = allHabits.map(h => h.id);
  let otherHabitDates = allHabits.map(h => h.dates);
  const swapDate = index => {
    let result;
    console.log("otherHabitDates", otherHabitDates);
    console.log("otherHabitDates[index]", otherHabitDates[index]);
    if (otherHabitDates[index]) {
      otherHabitDates[index].forEach((d, idx) => {
        console.log("two dates:", d.date, day.date);
        if (d.date === day.date) result = allHabits[index].dates[idx];
      });
    }
    if (result) result.id_habits = habitProps.id;
    return result;
  };

  return (
    <Container>
      <Modal style={styles.modal} transparent={true} visible={true}>
        <View
          style={{ alignItems: "center", backgroundColor: colors.primaryDark }}
        >
          <H1 style={{ fontWeight: "bold", color: colors.primaryText }}>
            {habitProps.name}
          </H1>
        </View>
        <View style={{ alignItems: "center", marginTop: 12 }}>
          <Text>
            {moment(day.date).format("dddd, MMMM Do")}
          </Text>
          <Image
            source={{ uri: day.picture }}
            style={{ height: 350, width: 280 }}
            resizeMode="contain"
          />
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Button
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Edit Habit Date Details"
                  },
                  buttonIndex => {
                    console.log(
                      "index and button",
                      buttonIndex,
                      BUTTONS[buttonIndex],
                      DESTRUCTIVE_INDEX
                    );
                    if (buttonIndex == DESTRUCTIVE_INDEX) {
                      dispatch(deleteDay(day));
                      Alert.alert(`Photo Deleted from ${habitProps.name}`, "", [
                        { text: "OK", onPress: () => dispatch(hideModal()) }
                      ]);
                    } else if (buttonIndex != CANCEL_INDEX) {
                      let swap = swapDate(buttonIndex);
                      dispatch(
                        updateDay({
                          id: day.id,
                          id_habits: habitIds[buttonIndex],
                          swap
                        })
                      );
                      let alertTitle = swap
                        ? `Photo swapped from ${habitProps.name} to ${BUTTONS[
                            buttonIndex
                          ]}!`
                        : `Photo moved to ${BUTTONS[buttonIndex]}!`;
                      Alert.alert(alertTitle, "", [
                        { text: "OK", onPress: () => dispatch(hideModal()) }
                      ]);
                    } else {
                      dispatch(hideModal());
                    }
                  }
                )}
            >
              <Text>
                {habitProps.name}
              </Text>
            </Button>
          </View>
          <View>
            <Button transparent onPress={() => dispatch(hideModal())}>
              <Text>Cancel</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 15
  },
  modal: {
    borderWidth: 2,
    borderColor: colors.primaryDark,
    flex: 0,
    alignItems: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "space-around",
    backgroundColor: "white"
  },
  habitName: {
    width: 70,
    alignItems: "center"
  },
  habitNameTitle: {
    color: "white"
  }
});

export default connect((state, ownProps) => ({
  day: ownProps.day,
  habitProps: ownProps.habitProps
}))(EditHabitDayTypeModal);
