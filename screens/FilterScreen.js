import { StyleSheet, Text, View } from "react-native";

import React from "react";

// Display the filter settings



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
