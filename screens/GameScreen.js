import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's guess</Text>
      <Text>GUESS</Text>
      <View>
        <Text>Higher or lower?</Text>
        <Text>- +</Text>
      </View>
      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "gold",
    padding: 12,
  },
});

export default GameScreen;
