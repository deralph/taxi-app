import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomTabs from "./BottomTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import Onboard from "../../screens/Onboard";

const NativeStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen
          options={{ headerShown: false }}
          name="Onboard"
          component={Onboard}
        />
        <NativeStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <NativeStack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={BottomTabs}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
