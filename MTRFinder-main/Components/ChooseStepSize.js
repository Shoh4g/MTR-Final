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
  KeyboardAvoidingView,
  InteractionManager,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Speech from "expo-speech";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const ChooseStepSize = ({ route, navigation }) => {
  const { gobackto } = route.params;
  const [stepSize, setStepSize] = useState(0.0);
  const { getItem, setItem } = useAsyncStorage("step_size");
  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setStepSize(newValue);
  };
  var error = false;
  const validate = () => {
    if (parseFloat(stepSize) > 0.0 && parseFloat(stepSize) < 1.0) {
      error = false;
    } else {
      error = true;
    }
  };

  const SaveAndNavigate = () => {
    validate();
    console.log(error);
    if (!error) {
      writeItemToStorage(stepSize);
      navigation.navigate("Home", { stepSize: stepSize });
      Speech.stop()
      Speech.speak("Submit");
    } else {
      alert("Incorrect step size! Step size must be between 0 to 1 metres.");
      Speech.speak(
        "Incorrect step size! Step size must be between 0 to 1 metres. Press ok in the center of the screen to continue and enter your step size again."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak(
              "We would recommend getting family or friends to help you on this step. Enter your step size here, it must be between 0 and 1 meters. The keyboard is always there and numeric. Speak screen to check your step size. The submit button is on the top right of the keyboard. The back button is on the top left of the keyboard."
            );
          }}
        >
          <Text style={styles.text}>Speak</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent3}>
        {/* <Text style={styles.normaltext}>
        Enter your step size here, step size must be between 0 metres to 1
        metres
      </Text> */}
        {stepSize !== 0.0 ? (
          <Text style={styles.normaltext}>Step size: {stepSize}</Text>
        ) : null}
        {error ? (
          <Text style={styles.normaltext}> Incorrect step size!</Text>
        ) : null}
        <TextInput
          placeholder=""
          ref={(ref) => {
            if (ref !== undefined && ref && !ref.isFocused()) {
              ref.focus();
            }
          }}
          onChangeText={(stepSize) => {
            setStepSize(stepSize);
          }}
          keyboardType="numeric"
          maxLength={5}
          style={styles.input}
        />
      </View>
      <KeyboardAvoidingView
        style={styles.parent}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate(gobackto, {
              goto: gobackto === "Instructions" ? "Choose Step Size" : null,
            });
            Speech.stop()
            Speech.speak("Go back");
          }}
        >
          <Text style={styles.text}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={SaveAndNavigate}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    bottom: 20,
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
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    width: "48%",
    height: 50,
    padding: 18,
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
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: "90%",
    alignItems: "center",
    minWidth: 200,
  },
});

export default ChooseStepSize;
