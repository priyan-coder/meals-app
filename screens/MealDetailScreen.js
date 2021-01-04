import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

// Display the recipe for the meal of choice

// popToTop() ==> goes back to the first screen in the stack instead of just a single back

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen!</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
