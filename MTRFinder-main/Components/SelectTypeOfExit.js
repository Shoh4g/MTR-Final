import React from "react";
import { useState, useEffect } from "react";
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
import { useSpecs } from "../Helpers/UseSpecs";
import useMap from "../Helpers/UseMap";
import * as Speech from "expo-speech";

const SelectTypeOfExit = ({ route, navigation }) => {
  useEffect(() => {
    Speech.speak(
      exits_string + "Choices are at the top of the screen. Press your choice to proceed."
    );
  }, []);
  var exits_string = "The choices are, from left to right, ";

  const { stepSize, station, exit } = route.params;
  console.log("In type", station);
  var modes_of_exit = useSpecs(station);
  console.log("In Type", modes_of_exit);
  modes_of_exit = modes_of_exit.type_of_exits;
  modes_of_exit = modes_of_exit[exit];
  modes_of_exit.some((e) => e === "Escalator")
    ? (exits_string += "Escalator, ")
    : "";
  modes_of_exit.some((e) => e === "Elevator")
    ? (exits_string += "Elevator, ")
    : "";
  modes_of_exit.some((e) => e === "Stairs") ? (exits_string += "Stairs, ") : "";
  const navigateEs = () => {
    var map = useMap(station, stepSize);
    var dir = map.findExit(exit, "Escalator");
    navigation.navigate("Directions", { dir, stepSize, station, exit });
    Speech.speak("Escalator");
  };
  const navigateEl = () => {
    var map = useMap(station, stepSize);
    var dir = map.findExit(exit, "Elevator");
    navigation.navigate("Directions", { dir, stepSize, station, exit });
    Speech.speak("Elevator");
  };
  const navigateSt = () => {
    var map = useMap(station, stepSize);
    var dir = map.findExit(exit, "Stairs");
    navigation.navigate("Directions", { dir, stepSize, station, exit });
    Speech.speak("Stairs");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent3}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button3}
          onPress={() => {
            Speech.speak(
              "The choices are all in one row under this button from left to right respectively. Press one of the buttons to proceed. press Button on bottom screen to go back"
            );
          }}
        >
          <Text style={styles.text}>Speak</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent}>
        {modes_of_exit.some((e) => e === "Escalator") ? (
          <TouchableOpacity style={styles.button} onPress={navigateEs}>
            <Text style={styles.text}>Escalator</Text>
          </TouchableOpacity>
        ) : null}
        {modes_of_exit.some((e) => e === "Elevator") ? (
          <TouchableOpacity style={styles.button} onPress={navigateEl}>
            <Text style={styles.text}>Elevator</Text>
          </TouchableOpacity>
        ) : null}
        {modes_of_exit.some((e) => e === "Stairs") ? (
          <TouchableOpacity style={styles.button} onPress={navigateSt}>
            <Text style={styles.text}>Stairs</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            navigation.navigate("Nearby Places", {
              stepSize,
              station,
              exit: exit,
            });
            Speech.speak("go back to hear places around the exit");
          }}
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    height: "100%",
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    top: 50,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
    alignItems: "center",
    paddingLeft: 20,
  },
  parent3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 35,
    right: 15,
  },
  parent4: {
    position: "absolute",
    top: 90,
  },
  button3: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    height: 60,
    minWidth: "32%",
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    borderColor: "white",
    height: 50,
    width: "95%",
  },
  text: {
    fontSize: 14,
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
export default SelectTypeOfExit;
