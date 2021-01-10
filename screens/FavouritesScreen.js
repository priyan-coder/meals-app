import { StyleSheet, Text, View } from "react-native";

import React from "react";

// Display the favourite meals selected

const FavouritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The FavouritesScreen !</Text>
    </View>
  );
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites",
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default FavouritesScreen;
