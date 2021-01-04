import React from "react";
// Display the recipe for the meal of choice

import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen!</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "centre", alignItems: "centre" },
});
