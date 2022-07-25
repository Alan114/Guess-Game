import React from "react";
import { Text, View } from "react-native";

const MainButton = (props) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

export default MainButton;
