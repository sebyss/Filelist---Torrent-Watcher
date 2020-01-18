import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../images/logo.png")} style={styles.logo} />
      <Text style={styles.text}> Torrent Watcher</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    letterSpacing: 1.1,
    fontWeight: "bold",
    color: "#fff"
  },
  logo: {
    height: 95,
    width: 100
  }
});
