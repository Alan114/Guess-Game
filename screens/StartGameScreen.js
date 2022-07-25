import React from "react";
import { TextInput, View } from "react-native";
import MainButton from "../components/MainButton";

const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <MainButton>Reset</MainButton>
      <MainButton>Confirm</MainButton>
    </View>
  );
};

export default StartGameScreen;
