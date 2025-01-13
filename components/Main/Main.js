import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Balance from "./Balance";

const Main = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title1}>Total Balance</Text>
      <Text style={styles.title}>Credit Card</Text>
      <Balance />
      <Text style={styles.title2}>
        <Text style={styles.amount}>40 540.74</Text>
        <Text style={styles.currency}> USD</Text>
      </Text>
      <View style={[styles.icons_cantainer]}>
        <View style={[styles.wrapper]}>
          <View style={[styles.iconCont]}>
            <Image
              source={require("../../assets/arrow1.png")}
              style={[styles.icon]}
            />
          </View>

          <Text style={styles.textIcons}>Send</Text>
        </View>
        <View style={[styles.wrapper]}>
          <View style={[styles.iconCont]}>
            <Image
              source={require("../../assets/arrow1.png")}
              style={[styles.icon1]}
            />
          </View>
          <Text style={styles.textIcons}>Receive</Text>
        </View>
        <View style={[styles.wrapper]}>
          <View style={[styles.iconCont]}>
            <Image
              source={require("../../assets/plus.png")}
              style={[styles.icon2]}
            />
          </View>
          <Text style={styles.textIcons}>Add</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    color: "#8B8B8B",
    textAlign: "center",
  },
  title1: {
    fontSize: 48,
    color: "#000000",
    fontWeight: "500",
  },
  title2: {
    paddingTop: 15,
    fontSize: 32,
    color: "#000000",
    fontWeight: "400",
    textAlign: "center",
  },
  amount: {
    color: "#000000",
  },
  currency: {
    color: "#808080",
  },
  icons_cantainer: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  wrapper: {
    alignItems: "center",
  },
  iconCont: {
    width: 60,
    height: 60,
    backgroundColor: "#8db4a7",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textIcons: {
    paddingTop: 10,
    fontSize: 14,
    color: "#2C2C2C",
  },
  icon: {
    width: 40,
    height: 40,
    transform: [{ rotate: "225deg" }],
  },
  icon1: {
    width: 40,
    height: 40,
  },
  icon2: {
    width: 35,
    height: 35,
  },
});

export default Main;
