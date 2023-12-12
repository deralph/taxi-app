import React from "react";
import { View, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Platform, NativeModules } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        padding: "5%",
        alignItems: "center",
      }}
    >
      <Ionicons
        name="chevron-back-circle"
        size={40}
        color="#8F00FF"
        onPress={() => navigation.goBack()}
      />
      <Image
        source={require("../assets/logo.jpg")}
        style={{ height: 40, marginLeft: "30%" }}
      />
    </View>
  );
}

export default Header;
