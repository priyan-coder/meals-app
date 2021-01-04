import React from "react";
// Cusines Grid

import { View, Text, StyleSheet } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> The CategoriesScreen !</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "centre", alignItems: "centre" },
});
