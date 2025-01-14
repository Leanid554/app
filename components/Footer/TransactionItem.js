import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionItem = ({ title, date, amount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.arrow}>↓</Text>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EAF8F1",
    padding: 15,
    marginTop: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    fontSize: 18,
    color: "#000",
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  date: {
    fontSize: 12,
    color: "#8B8B8B",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default TransactionItem;
