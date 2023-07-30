import * as React from "react";
import { useEffect } from "react";
import { View, BackHandler, Alert } from "react-native";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
import Countries from './src/screens/countries';
import CountryLanguages from "./src/screens/country_languages";
import Home from "./src/screens/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Countries" component={Countries} />
      <Stack.Screen name="CountryLanguages" component={CountryLanguages} />
    </Stack.Navigator>
  );
}

function NotificationsScreen({ navigation }) {
  return <View />;
}

function handleBackButton() {
  Alert.alert(
    "Exit App",
    "Exiting the application?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => BackHandler.exitApp(),
      },
    ],
    {
      cancelable: false,
    }
  );
  BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  return true;
}

const Drawer = createDrawerNavigator();

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  });
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Exit" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
