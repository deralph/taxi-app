import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TextInput } from "react-native";
import Button from "../components/Button";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fetchData from "../components/fetchData";

export default function Login() {
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigation = useNavigation<any>();

  const handleLogin = { key: "value" };
  fetchData<{ key: string }>("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ matricNumber, password }),
  })
    .then((data) => {
      console.log("POST Data:", data);
      navigation.navigate("Main");
    })
    .catch((error) => {
      console.error("POST Error:", error);
      setError(true);
    });
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

      {error ? (
        <Text
          style={{
            color: "#f00",
            fontSize: 16,
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          Incorrect password or Matric number
        </Text>
      ) : null}

      <TextInput
        placeholderTextColor={"#fff"}
        placeholder="Matric No."
        selectionColor="#fff "
        style={{
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
        value={matricNumber}
        onChange={(value) => setMatricNumber(value.nativeEvent.text)}
      />
      <TextInput
        placeholderTextColor={"#fff"}
        placeholder="Password"
        selectionColor="#fff"
        style={{
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
        value={password}
        onChange={(value) => setPassword(value.nativeEvent.text)}
      />

      <View style={{ marginTop: "40%" }}>
        <Button
          onPress={() => {
            handleLogin;
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
