import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import Button from "../components/Button";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fetcher from "../components/fetchData";
import { getValueFor, save } from "../storage";

export default function Login() {
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>([]);
  const navigation = useNavigation<any>();

  const getUser = async () => {
    try {
      await getValueFor("user").then(async (userData: any) => {
        console.log(JSON.parse(userData));
        console.log(JSON.parse(userData).phone);
        console.log("something above");
        if (JSON.parse(userData).phone) {
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
    console.log("clicked");
    if (!phone || !password) {
      setMessage("Enter your phone number and password");
      return;
    }
    try {
      await fetcher(
        "http://192.168.43.193:5000/api/v1/auth/login",
        "POST",
        setMessage,
        setData,
        { phone, password }
      ).then((res: any) => {
        if (res) {
          console.log(res);
          console.log("response user", res.user);
          const value = JSON.stringify(res.user);
          console.log("response user stringed", value);
          save("user", value);
          navigation.navigate("Main");
        }
      });
    } catch (error) {
      console.log("an error occured");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("../assets/akungbaMap.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      >
        <View
          style={{
            backgroundColor: "rgba(225,225,225,0.8)",
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
            <Image
              source={require("../assets/logo.jpg")}
              style={{ borderRadius: 60 }}
            />
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
            placeholderTextColor={"#8F00FF"}
            placeholder="Phone No."
            selectionColor="rgb(255, 255, 255) "
            style={{
              fontSize: 16,
              borderColor: "#8F00FF",
              borderWidth: 2,
              borderStyle: "solid",
              color: "#8F00FF",
              borderRadius: 40,
              height: 60,
              paddingLeft: 20,
              width: "100%",
              marginTop: "20%",
              fontWeight: "600",
            }}
            value={phone}
            onChange={(value) => setphone(value.nativeEvent.text)}
          />
          <TextInput
            placeholderTextColor={"#8F00FF"}
            placeholder="Password"
            selectionColor="rgb(255, 255, 255)"
            style={{
              fontSize: 16,
              borderColor: "#8F00FF",
              borderWidth: 2,
              borderStyle: "solid",
              color: "#8F00FF",
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
            <Text
              onPress={handleLogin}
              style={{
                borderColor: "#8F00FF",
                paddingHorizontal: "20%",
                paddingVertical: 10,
                borderRadius: 20,
                borderStyle: "solid",
                borderWidth: 2,
                fontSize: 20,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
