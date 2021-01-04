import React from "react";
// Display the filter settings

import { View, Text, StyleSheet } from "react-native";

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The FilterScreen !</Text>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
