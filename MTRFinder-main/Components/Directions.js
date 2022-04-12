import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Touchable,
} from "react-native";
import * as Speech from "expo-speech";
import { Linking } from "react-native";

const Directions = ({ route, navigation }) => {
  const phoneNumber = 28818888;
  const { dir, stepSize, station, exit } = route.params;
  const directions = [
    "Start Journey Now",
    ...dir,
    "Congrats, you made it!\nClick the bottom right button to go back to the Homepage",
  ];
  const [curr, set_curr] = useState(0);
  const update_curr = (dir) => {
    console.log(dir)
    var num = curr + dir;
    if (num < 0) {
      navigation.navigate("Select Type Of Exit", { stepSize, station, exit });
    } else if (num >= directions.length) {
      navigation.navigate("Home", { stepSize });
    }
    else{
      Speech.speak(directions[num])
    }
    set_curr(num);
    console.log(curr);
    console.log(directions[curr])
    console.log(directions[curr+1]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.parent2}>
          <TouchableOpacity
            style={styles.button3}
            activeOpacity={0.5}
            onPress={() => {
              Linking.openURL(`tel:${phoneNumber}`);
              Speech.stop()
              Speech.speak(
                "Call MTR hotline"
              );
            }}
          >
            <Text style={styles.text}>Call</Text>
          </TouchableOpacity>
          {curr != directions.length - 1 ? (
            <TouchableOpacity
              style={styles.button3}
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate("Home", { stepSize });
                Speech.stop();
                Speech.speak(
                  "End journey early"
                );
              }}
            >
              <Text style={styles.text}>End</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button3}
            onPress={() => {
              Speech.stop();
              Speech.speak(
                "Bottom left of the screen to go back, bottom right to proceed. On this row, there are three buttons, This button is on the right, Press middle button to end journey, Press left button to call MTR hotline for help."
              );
            }}
          >
            <Text style={styles.text}>Speak</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.parent3}>
        <Text style={styles.normaltext}>{directions[curr]}</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.parent}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Speech.stop();
              Speech.speak("Back");
              update_curr(-1);
            }}
          >
            <Text style={styles.text}>
              {curr !== 0 ? "Previous" : "Go Back"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Speech.stop();
              Speech.speak("Next");
              update_curr(+1);
            }}
          >
            <Text style={styles.text}>
              {curr === directions.length - 1
                ? "End Journey"
                : "Next Instruction"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center'
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 10,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 10,
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
    minWidth: "48%",
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
    width: "20%",
    height: 50,
  },
  button3: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    minWidth: "32%",
    height: 50,
  },
  text: {
    fontSize: 16,
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
    margin: 20,
  },
  parent3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
export default Directions;
