import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import React, { Component } from "react";
import TransactionItem from "./TransactionItem";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Last Recepients</Text>
        <Text style={styles.title1}>Send to</Text>

        <View style={styles.icons_cantainer}>
          <View style={styles.wrapper}>
            <View style={styles.iconCont}>
              <Image
                source={require("../../assets/default-profile.png")}
                style={[styles.iconCont]}
              />
            </View>
            <Text style={styles.textIcons}>Leanid S.</Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.iconCont}>
              <Image
                source={require("../../assets/default-profile.png")}
                style={[styles.iconCont]}
              />
            </View>
            <Text style={styles.textIcons}>Andy K.</Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.iconCont}>
              <Image
                source={require("../../assets/default-profile.png")}
                style={[styles.iconCont]}
              />
            </View>
            <Text style={styles.textIcons}>Artem O.</Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.iconCont}>
              <Image
                source={require("../../assets/default-profile.png")}
                style={[styles.iconCont]}
              />
            </View>
            <Text style={styles.textIcons}>Ivan S.</Text>
          </View>
        </View>

        {/* Добавляем прокрутку для списка транзакций */}
        <ScrollView style={styles.transact}>
          <TransactionItem
            title="From Jordan R."
            date="Today, 17:10"
            amount="-$220"
          />
          <TransactionItem
            title="To Alice S."
            date="Yesterday, 14:30"
            amount="-$150"
          />
          <TransactionItem
            title="From Jordan R."
            date="Today, 17:10"
            amount="-$220"
          />
          <TransactionItem
            title="To Alice S."
            date="Yesterday, 14:30"
            amount="-$150"
          />
          <TransactionItem
            title="From Jordan R."
            date="Today, 17:10"
            amount="-$220"
          />
          <TransactionItem
            title="To Alice S."
            date="Yesterday, 14:30"
            amount="-$150"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  title: {
    fontSize: 22,
    color: "#8B8B8B",
    fontWeight: "100",
  },
  title1: {
    fontSize: 48,
    color: "#000000",
    fontWeight: "500",
    marginTop: -15,
  },
  icons_cantainer: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  wrapper: {
    alignItems: "center",
  },
  iconCont: {
    width: 55,
    height: 55,
    backgroundColor: "#8db4a7",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textIcons: {
    paddingTop: 5,
    fontSize: 14,
    color: "#2C2C2C",
  },
  transact: {
    maxHeight: 300,
    marginTop: 15,
  },
});
