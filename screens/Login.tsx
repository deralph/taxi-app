import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Image, TextInput } from "react-native";
import Button from "../components/Button";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fetcher from "../components/fetchData";
import { getValueFor, save } from "../storage";

export default function Login() {
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>([]);
  const navigation = useNavigation<any>();

  const getUser = async () => {
    try {
      await getValueFor("user").then(async (userData: any) => {
        console.log(JSON.parse(userData));
        console.log(JSON.parse(userData).matricNumber);
        console.log("something above");
        if (JSON.parse(userData).matricNumber) {
          navigation.navigate("Main");
        }
      });
    } catch (message) {
      console.log("an message occured");
      console.error("GET user:", message);
    }
    return null;
  };
  const handleLogin = async () => {
    try {
      await fetcher(
        "http://192.168.43.193:5000/api/v1/auth/login",
        "POST",
        setMessage,
        setData,
        { matricNumber, password }
      ).then(() => {
        save("user", JSON.stringify(data.user));
        navigation.navigate("Main");
      });
    } catch (error) {
      console.log("an error occured");
    }
  };
  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#8F00FF",
        flex: 1,
        padding: "5%",
        alignItems: "center",
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

      {message ? (
        <Text
          style={{
            color: "#f00",
            fontSize: 16,
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          {message}
        </Text>
      ) : null}

      <TextInput
        placeholderTextColor={"#fff"}
        placeholder="Matric No."
        selectionColor="rgb(255, 255, 255) "
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
        selectionColor="rgb(255, 255, 255)"
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
          onPress={handleLogin}
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
