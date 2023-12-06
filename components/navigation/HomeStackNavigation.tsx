import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Payment from "../../screens/Payment";
import TicketDidplay from "../../screens/TicketDisplay";
import Header from "../Header";

const NativeStack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          // fontFamily: "poppinsBold",
          fontSize: 20,
        },
        header: () => <Header />,
      }}
    >
      <NativeStack.Screen
        name="HomeScreen"
        component={Home}
        options={
          {
            // headerShown: false,
            //   header: () => <Header />,
            // tabBarIcon: (props) => <BottomIcon {...props} Icon={HomeIcon} />,
          }
        }
      />

      <NativeStack.Screen
        // options={{ headerShown: false }}
        name="Ticket"
        component={TicketDidplay}
      />
    </NativeStack.Navigator>
  );
}
