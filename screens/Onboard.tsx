import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import Button from "../components/Button";
import { Entypo } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

export default function Onboard({ navigation }: any) {
  //   const navigation = useNavigation<any>();
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#8F00FF",
        flex: 1,
        padding: "5%",
        alignItems: "center",
        // justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 60,
          alignItems: "center",
          justifyContent: "center",
          height: 120,
          width: 120,
          marginTop: "30%",
        }}
      >
        <Image source={require("../assets/logo.png")} />
      </View>
      <Text style={{ color: "#fff", fontSize: 40, marginTop: "20%" }}>
        Find a best
      </Text>
      <Text style={{ color: "#fff", fontSize: 40, fontWeight: "700" }}>
        Taxi ride
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          lineHeight: 26,
          width: "60%",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <View style={{ marginTop: "40%" }}>
        <Button
          onPress={() => {
            navigation.navigate("Login");
          }}
          text="Login"
          color="#000"
          bgColor="#fff"
          fontSize={25}
          icon={<Entypo name="login" size={24} color="black" />}
        />
      </View>
    </SafeAreaView>
  );
}
