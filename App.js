import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Navbar from "./components/Navbar";
import ContentSection from "./components/ContentSections";

export default function App() {
  return (
    <View style={{ height: "100%" }}>
      <StatusBar hidden />
      <Navbar />
      <ContentSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
