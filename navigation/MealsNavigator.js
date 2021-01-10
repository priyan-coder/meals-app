// import CategoriesScreen from "../screens/CategoriesScreen";
// import CategoryMealsScreen from "../screens/CategoryMealsScreen";
// import Colors from "../constants/Colors";
// import FavouritesScreen from "../screens/FavouritesScreen";
// import { Ionicons } from "@expo/vector-icons";
// import MealDetailScreen from "../screens/MealDetailScreen";
// import { Platform } from "react-native";
// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "react-navigation-stack";

// const MealsNavigator = createStackNavigator(
//   {
//     Categories: {
//       screen: CategoriesScreen,
//     },
//     CategoryMeals: {
//       screen: CategoryMealsScreen,
//     },
//     MealDetail: MealDetailScreen,
//   },

//   // 2nd param
//   {
//     initialRouteName: "Categories",
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
//       },
//       headerTintColor:
//         Platform.OS === "android" ? "white" : Colors.primaryColor,
//     },
//   }
// );

// const MealsFavTabNavigator = createBottomTabNavigator(
//   {
//     Meals: {
//       screen: MealsNavigator,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return (
//             <Ionicons
//               name="ios-restaurant"
//               size={25}
//               color={tabInfo.tintColor}
//             />
//           );
//         },
//       },
//     },
//     Favourites: {
//       screen: FavouritesScreen,
//       navigationOptions: {
//         tabBarLabel: "Favourites!",
//         tabBarIcon: (tabInfo) => {
//           return (
//             <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
//           );
//         },
//       },
//     },
//   },

//   // 2nd param
//   {
//     tabBarOptions: {
//       activeTintColor: Colors.acccentColor,
//     },
//   }
// );

// export default createAppContainer(MealsFavTabNavigator);

// setup for navigation between the screens
// Pages and screens are managed on a stacks of pages ==> Data structure used = stack
// visible screen is the top of the stack and when back button is clicked, the top is popped off
// yarn add react-navigation-stack
// effectively we are using a component to help with the navigation, transition between screens
// AppContainer to wrap the stack of MealsNavigator with the meta data that react needs

// Any of the screens under the navigator component from react-navigator gets a special prop

// Instead of specifiying the navigationOptions at each screen after declaring its component
// Adding it under MealsNavigator is better

// Pass the defaultNavigationOptions aka default settings as a second param of createStackNavigator
// Those options applied to every screen in the Navigator
// The navigationOptions specified in the various screens take precedence or can override the default settings applied here
// Hit control + space to check for other options to set in the second param for createStackNavigator

// MealsNavigator is now nested in the tabs navigator
// AppContainer is the root navigator which can contain nested navigators
// Clicking on Meals tab leads to the stack while Fav leads to the Favourites Screen

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitle: "A Screen",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator);
