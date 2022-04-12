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
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as Speech from 'expo-speech'

const Instructions2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* Instructions */}
        <Text style={styles.normaltext}>How to use the app:</Text>
        <Text style={styles.longtext}>
        1. Enter your step size and press return, then press the submit on top right of the keyboard, your step
          size data will be stored {"\n"}
          2. Now, everytime you open the app, the home screen will have two
          buttons at the bottom, start journey on the left and settings on the
          right. {"\n"}
          3. Press start journey to start your journey and press settings to
          change your step size or hear this tutorial again, swipe left or press
          the arrow on the top to go back to the home screen{" "}
          {"\n"}
          4. After you start your journey, type the name of the station you are in and press return
          on the keyboard, then go to the next screen by pressing the submit
          button at the bottom right{"\n"}
          5. If you need to go back to the previous screen, press the back
          button on the bottom left corner{"\n"}
          6. Choose your exit using the button at the bottom middle, then go to the next
          screen by pressing the submit button at the bottom right{"\n"}
          7. Choose the mode you prefer using the button at the bottom middle, then go to the next
          screen by pressing the submit button at the bottom right{"\n"}
          8. The app will provide information about locations nearby, press the
          next button at the bottom right to continue{"\n"}
          9. Follow the directions, press the button on the
          bottom right to hear the next directions or press the
          button on the bottom left corner to hear the previous directions{"\n"}
          10. If you need to end your journey early, press the top right button,
          if you need to call for help, press the top left button{"\n"}
          11. When you finish your journey, press the button on the bottom right to
          return to the homescreen{"\n"}
          12. Call MTR hotline 2881 8888 for assistance{"\n"}
        </Text>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {navigation.navigate("Settings"); Speech.speak('Back to settings')}}
        >
          <Text style={styles.text}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignContent:'center',
    flexDirection: 'column',
    alignItems: 'center',
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
    width: "90%",
    height: 50,
    margin: 20,
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
});
export default Instructions2;
