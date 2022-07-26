import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.accent100,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent100,
    padding: 12,
  },
});
