import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class RideScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.text}>Rides Available</Text>
        </View>
        <View>
          <Image style={styles.img}  source={require("../assets/Group1.png")} ></Image>
        </View>
        <View>
          <Image style={styles.img1}  source={require("../assets/Group2.png")} ></Image>
        </View>
        <View>
          <Image style={styles.img2}  source={require("../assets/Group3.png")} ></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a55b1"
  },
  text: {
    color: "#daeff7",
    backgroundColor: "#233f64",
    margin: -50,
    marginTop: -50,
    paddingRight: 180,
    paddingLeft: 40,
    paddingTop: 80,
    paddingBottom: 20,
    fontSize: 30
  },
  img: {
    marginTop: 60, 
    width: 400,
    height: 200,
  },
  img1: {
    marginTop: 10, 
    width: 400,
    height: 200,
  },
  img2: {
    marginTop: 10, 
    width: 400,
    height: 200,
  },
});
