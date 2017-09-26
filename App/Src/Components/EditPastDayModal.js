import React, { PropTypes } from "react";
import { connect } from "react-redux";
import {
  Alert,
  Picker,
  ActionSheetIOS,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Right,
  Body,
  H1,
  H3
} from "native-base";
import { editPastDay, hideModal } from "./../Actions/ModalActions";
import { updateDay, deleteDay } from "./../Actions/DayActions";
import { sendPhoto } from "./../Actions/PhotoActions";
import Modal from "react-native-modal";
import { Actions, ActionConst } from "react-native-router-flux";
const moment = require("moment");
import { AsyncStorage } from "react-native";
import colors from "./../ColorPalette";

const EditPastDayModal = ({ day, habitProps, dispatch }) => {
  // Link up from database of different habits, should be habit names
  let data = {
    user: { id: habitProps.id_users },
    habits: [],
    token: ""
  };

  return (
    <Modal style={styles.modal} transparent={true} visible={true}>
      <View
        style={{ alignItems: "center", backgroundColor: colors.primaryDark }}
      >
        <H1 style={{ fontWeight: "bold", color: colors.primaryText }}>
          {habitProps.name}
        </H1>
      </View>
      <View style={{ alignItems: "center", marginTop: 12 }}>
        <Text>Mark Completed</Text>
        <Text>
          {moment(day.date).format("dddd, MMMM Do")}
        </Text>
        <View style={{ marginTop: 10, marginBottom: 6 }}>
          <Button
            block
            style={{ marginTop: 10, marginBottom: 10 }}
            onPress={() => {
              dispatch(hideModal());
              Actions.camera({ habitDay: day, habitProps });
            }}
          >
            <Text>Take Photo</Text>
          </Button>
          <Button
            block
            style={{ marginTop: 10 }}
            onPress={() => {
              console.log(data);
              dispatch(sendPhoto(data, day, habitProps));
              Alert.alert("Habit checked off without photo.", "", [
                { text: "OK", onPress: () => dispatch(hideModal()) }
              ]);
            }}
          >
            <Text>No Photo</Text>
          </Button>
        </View>
        <View>
          <Button transparent onPress={() => dispatch(hideModal())}>
            <Text style={{ color: colors.primary }}>Cancel</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center"
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
  card: {
    margin: 15,
    flex: 0.5
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
}))(EditPastDayModal);
