import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import MainButton from "../components/MainButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <MainButton>Reset</MainButton>
      <MainButton>Confirm</MainButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "crimson",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ceba06",
    borderBottomWidth: 2,
    color: "#ceba06",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
