import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
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
});

export default GameScreen;
