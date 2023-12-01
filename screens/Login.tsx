import React from "react";
import { SafeAreaView, View, Text, Image, TextInput } from "react-native";
import Button from "../components/Button";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Onboard() {
  const navigation = useNavigation<any>();
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
      <TextInput
        placeholderTextColor={"#fff"}
        placeholder="Matric No."
        selectionColor="#fff "
        style={{
          // fontFamily: "Matric Number",
          fontSize: 16,
          borderColor: "#fff",
          borderWidth: 2,
          borderStyle: "solid",
          color: "#fff",
          borderRadius: 40,
          height: 60,
          paddingLeft: 20,
          width: "100%",
          marginTop: "20%",
          fontWeight: "600",
        }}
      />
      <TextInput
        placeholderTextColor={"#fff"}
        placeholder="Password"
        selectionColor="#fff"
        style={{
          // fontFamily: "poppins",
          fontSize: 16,
          borderColor: "#fff",
          borderWidth: 2,
          borderStyle: "solid",
          color: "#fff",
          borderRadius: 40,
          height: 60,
          paddingLeft: 20,
          width: "100%",
          fontWeight: "600",
          marginTop: "10%",
        }}
      />

      <View style={{ marginTop: "40%" }}>
        <Button
          onPress={() => {
            navigation.navigate("Main");
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
