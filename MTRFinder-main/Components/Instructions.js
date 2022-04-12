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
  FlatList,
  ScrollView,
} from "react-native";
import * as Speech from "expo-speech";

const Instructions = ({ route, navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      Speech.speak("Press Speak on the top right to hear the instructions.");
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  const { goto } = route.params;
  return (
    <SafeAreaView style={styles.container}>
        {/* Instructions */}
  
        <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak(`
              1. Enter your step size and press return, then press the submit on
            top right of the keyboard, your step size data will be stored.
            2. On any screen, press the speak button on the top right to make
            the app narrate all the instructions. Now, every time you open the
            app, the home screen will have two buttons at the bottom, start
            journey on the right and settings on the left.
            3. Press start journey to start your journey and press settings to
            change your step size or hear this tutorial again, swipe left or
            press the arrow on the top to go back to the home screen.
            4. After you start your journey, type the name of the station you
            are in and press return on the keyboard, then go to the next screen
            by pressing the submit button at the bottom right.
            5. If you need to go back to the previous screen, press the back
            button on the bottom left corner.
            6. Choose your exit using the button at the bottom middle, then go
            to the next screen by pressing the submit button at the bottom right.
            7. Choose the mode you prefer using the button at the bottom middle,
            then go to the next screen by pressing the submit button at the
            bottom right.
            8. The app will provide information about locations nearby, press
            the next button at the bottom right to continue.
            9. Follow the directions, press the button on the bottom right to
            hear the next directions or press the button on the bottom left
            corner to hear the previous directions.
            10. If you need to end your journey early, press the top right
            button, if you need to call for help, press the top left button.
            11. When you finish your journey, press the button on the bottom
            right to return to the home screen.
            12. Call MTR hotline 2881 8888 for assistance.`);
          }}
        >
          <Text style={styles.text}>Speak</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.parent3}>
        <Text style={styles.normaltext}>How to use the app:</Text>
        <ScrollView>
          <Text style={styles.longtext}>
            1. Enter your step size and press return, then press the submit on
            top right of the keyboard, your step size data will be stored {"\n"}
            2. On any screen, press the speak button on the top right to make
            the app narrate all the instructions. Now, everytime you open the
            app, the home screen will have two buttons at the bottom, start
            journey on the right and settings on the left. {"\n"}
            3. Press start journey to start your journey and press settings to
            change your step size or hear this tutorial again, press the button on the bottom of the screen to go back to the homepage {"\n"}
            4. After you start your journey, type the name of the station you
            are in and go to the next screen
            by pressing the submit button {"\n"}
            5. If you need to go back to the previous screen, press the back
            button {"\n"}
            6. Choose your exit using the button at the bottom middle, then go
            to the next screen by pressing the submit button at the bottom right
            {"\n"}
            7. Choose the mode you prefer based on the spoken instructions {"\n"}
            8. The app will provide information about locations nearby, press
            the next button at the bottom right to continue{"\n"}
            9. Follow the directions, press the button on the bottom right to
            hear the next directions or press the button on the bottom left
            corner to hear the previous directions{"\n"}
            10. If you need to end your journey early, press the top middle
            button, if you need to call for help, press the top left button
            {"\n"}
            11. When you finish your journey, press the button on the bottom
            right to return to the homescreen{"\n"}
            12. Call MTR hotline 2881 8888 for assistance in the station {"\n"}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate(goto, { gobackto: "Instructions" });
            if (goto === "Settings") {
              Speech.stop();
              Speech.speak("Go back to settings");
            } else {
              Speech.stop();
              Speech.speak("Enter step size, the keyboard is numeric");
            }
          }}
        >
          <Text style={styles.text}>
            {goto === "Settings" ? "Go Back" : "Enter Step Size"}
          </Text>
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
    width: "95%",
    height: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginTop: 15,
  },
  longtext: {
    fontSize: 12,
    lineHeight: 15,
    // fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: "black",
    textAlign: "justify",
    margin: 19,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    right: 0,
    top: 10
  },
  parent3: {
    position: "absolute",
    top: 90,
  },
  button2: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 20,
    marginBottom: 0,
    alignContent: "center",
  },
});

export default Instructions;
