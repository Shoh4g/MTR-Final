import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { stationExists, useSpecs } from "../Helpers/UseSpecs";
import * as Speech from "expo-speech";
const SelectExit = ({ route, navigation }) => {
  const { stepSize, station } = route.params;
  console.log(station);
  var exits = useSpecs(station);
  console.log(exits);
  exits = exits.exits;
  const [exit_number, set_exit_number] = useState(0);
  const update_exit = (dir) => {
    var num = (exit_number + dir) % exits.length;
    if (num === -1) {
      num = exits.length - 1;
    }
    set_exit_number(num);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak(
              "On the bottom of the screen there are three buttons, Use the middle button to change exit choice. submit button is on the right, back button is on the left"
            );
          }}
        >
          <Text style={styles.text}>Speak</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent3}>
        <Text style={styles.normaltext}>
          Which exit do you wish to leave at?
        </Text>
        <Text style={styles.normaltext}>Exit {exits[exit_number]}</Text>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            Speech.stop();
            navigation.navigate("Select Station", { stepSize: stepSize });
            Speech.speak("back to station");
          }}
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            update_exit(1);
            Speech.stop();
            Speech.speak(exits[(exit_number + 1) % exits.length]);
          }}
        >
          <Text style={styles.text}>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Nearby Places", {
              stepSize,
              station,
              exit: exits[exit_number],
            });
            Speech.stop();
            Speech.speak(
              "submit, speak screen to hear the places near your chosen exit"
            );
          }}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    height: 50,
    width: "33%",
    padding: 18,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 35,
    right: 15,
  },
  parent3: {
    position: "absolute",
    top: 90,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
  },
  text: {
    fontSize: 13.5,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginBottom: 15,
  },
});
export default SelectExit;
