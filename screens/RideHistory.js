import React, { Component } from "react";
import { View, Text, StyleSheet , Image} from "react-native";

export default class RideHistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require("../assets/drivehistory.png")}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f14c4c"
  },
  text: {
    color: "#CC1100",
    fontSize: 50
  },
  img: {
    margin: "50%",
    width: 400,
    height: 400,
},
});
