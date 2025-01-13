import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

const NavBar = ({ onPressHome, onPressSettings, profileImage }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity>
        <Image
          source={require("../assets/menu.png")}
          style={[styles.iconMenu]} // Добавлено вращение
        />
      </TouchableOpacity>

      <View style={styles.rightIcons}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onPressSettings}
        >
          <Image
            style={styles.iconmes}
            source={require("../assets/iconMes.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressHome}>
          <Image
            source={require("../assets/default-profile.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
    justifyContent: "space-between", // Элементы с двух сторон
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 10,
    backgroundColor: "#aedfcc",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconMenu: {
    width: 30,
    height: 30,
    transform: [{ rotate: "180deg" }],
  },
  iconmes: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default NavBar;
