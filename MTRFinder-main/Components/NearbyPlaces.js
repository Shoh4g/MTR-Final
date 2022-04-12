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
  ScrollView,
} from "react-native";
import useNearbyPlaces from "../Helpers/Places";
import * as Speech from "expo-speech";

const NearbyPlaces = ({ route, navigation }) => {
  const { stepSize, station, exit } = route.params;
  const places = useNearbyPlaces(station, exit);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak(
              "bottom right submit, Bottom left back. Speak screen to hear list of places around your exit."
            );
          }}
        >
          <Text style={styles.text}>Speak</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.parent3}>
      <Text style={styles.normaltext}>Places near exit {exit}</Text>
      <FlatList
        data={places.map((place) => {
          return { key: place };
        })}
        renderItem={({ item }) => (
          <Text style={styles.normaltext}>{item.key}</Text>
        )}
      />
      </View>
      <View style={styles.parent5}>
      <Text style={styles.normaltext2}>
        Are you heading for the correct exit?
      </Text>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            Speech.stop();
            navigation.navigate("Select Exit", { stepSize, station });
            Speech.speak("choose another exit");
          }}
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Select Type Of Exit", {
              stepSize,
              station,
              exit,
            });
            Speech.stop();
            Speech.speak(
              "proceed with this exit"
            );
          }}
        >
          <Text style={styles.text}>Proceed</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    overflow: "scroll",
    alignItems: "center",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "scroll",
    position: "absolute",
    bottom: 15
  },
  parent5: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "scroll",
    position: "absolute",
    bottom: 40
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
    width: "46%",
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
  parent2: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 35,
    right: 15,
  },
  parent3: {
    height: '85%',
    position: "absolute",
    top: 90,
  },
  parent4: {
    flex: 1,
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
  normaltext2: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginBottom: 40,
  },
  overflow: {},
});
export default NearbyPlaces;
