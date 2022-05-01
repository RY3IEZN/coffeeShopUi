/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import MenuList from "../screens/MenuList";
import OrderDetails from "../screens/OrderDetails";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

function Navigators(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MenuList"
          component={MenuList}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OrderDetails"
          component={OrderDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigators;
