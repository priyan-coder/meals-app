import Colors from "../constants/Colors";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import React from "react";

// yarn add react-navigation-header-buttons
// yarn add @expo/vector-icons
// forward all props using {...props} ==> all key value pairs

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
