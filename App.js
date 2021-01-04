import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigation/MealsNavigator";
// Starts the entire App
// expo install expo-font ==> To install expo-font
// startAsync to fetchFonts
// Once the fonts are loaded ==> set fontLoaded to true
// Until fonts are loaded ==> display Apploading

// Navigation using https://reactnavigation.org/docs/4.x/getting-started/
// There's no URL for navigation in native apps unlike the web
// yarn add react-navigation ==> Third part library
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view ==> dependencies for navigation

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return <MealsNavigator />;
}
