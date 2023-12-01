import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, View } from "react-native";
import Animated, { FadeInLeft, FadeOut } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import History from "../../screens/History";
import Profile from "../../screens/Profile";
import HomeStackNavigation from "./HomeStackNavigation";

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerStyle: { elevation: 0, borderBottomWidth: 0 },
        tabBarActiveTintColor: "#003",
        tabBarStyle: {
          paddingBottom: Platform.select({
            ios: insets.bottom,
            android: 15 + insets.bottom,
          }),
          height: Platform.select({
            ios: 70 + insets.bottom - 20,
            android: 70,
          }),
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: (props: any) => (
            <FontAwesome name="home" size={24} color="#8F00FF" />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: (props: any) => (
            <FontAwesome5 name="history" size={24} color="#8F00FF" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: (props: any) => (
            <FontAwesome name="user" size={24} color="#8F00FF" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
