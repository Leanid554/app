import { Text, View, Image, StyleSheet } from "react-native";
import React, { Component } from "react";

export default class Balance extends Component {
  render() {
    return (
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/logo.png")}
            style={[styles.icon]}
          />
          <Text style={styles.title}>****5482</Text>
          <Image
            source={require("../../assets/arrow.png")}
            style={[styles.iconArrow]}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parentContainer: {
    alignItems: "center",
    paddingTop: 10,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e4fff6",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: 200,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  iconArrow: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },
});
