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
  TouchableOpacity,
} from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Speech from "expo-speech";

const HomePage = ({ route, navigation }) => {
  const { stepSize } = route.params;
  console.log(stepSize, typeof stepSize);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak(
              "Hello there! Press the button on the bottom right of the screen to start your journey, or configure your settings by clicking the button on the bottom left."
            );
          }}
        >
          <Text style={styles.text}>Speak</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent3}>
        <Text style={styles.normaltext}>Hello there!</Text>
        <Text style={styles.normaltext}>
          Press the button on the bottom right of the screen to start your
          journey, or configure your settings by clicking the button on the
          bottom left.
        </Text>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Settings", { stepSize: stepSize });
            Speech.stop();
            Speech.speak("Settings, bottom left to change step size, bottom right to hear instructions, top to go back to home page");
          }}
        >
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Select Station", { stepSize: stepSize });
            Speech.stop();
            Speech.speak("start journey, type in your station");
          }}
        >
          <Text style={styles.text}>Start Journey</Text>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    height: 50,
    width: "48%",
    padding: 18,
  },
  text: {
    fontSize: 16,
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

export default HomePage;
