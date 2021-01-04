import React from "react";
// Display the favourite meals selected

import { View, Text, StyleSheet } from "react-native";

const FavouritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The FavouritesScreen !</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
