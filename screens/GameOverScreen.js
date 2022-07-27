import React from "react";
import { StyleSheet, Text } from "react-native";

const GameOverScreen = () => {
  return <Text style={styles.text}>GAME OVER !!!</Text>;
};

export default GameOverScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 38,
  },
});
