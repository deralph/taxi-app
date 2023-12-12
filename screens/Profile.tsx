import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import fetcher from "../components/fetchData";
import { deleteValueFor, getValueFor } from "../storage";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

type profileType = {
  name: string;
  course: string;
  phone: string;
  password: string | any;
  walletPrice: number;
  createdAt: Date;
};

export default function Profile() {
  const navigation = useNavigation<any>();
  const [profile, setProfile] = useState<profileType>();
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const [data, setData] = React.useState<any>();

  const getProfile = async () => {
    try {
      const paul = await getValueFor("user");
      console.log("hi from profile");
      console.log(paul);
      console.log(JSON.parse(paul!));
      console.log(JSON.parse(paul!).phone);
      console.log("something above");
      const p = JSON.parse(paul!).phone;
      try {
        await fetcher(
          `http://192.168.43.193:5000/api/v1/auth/${p}`,
          "GET",
          setMessage,
          setData
        ).then(() => {
          setData(data.user);
          console.log("GET Data:", data);
          setLoading(false);
        });
      } catch (error) {
        console.log("error in fetching from server - ticket", error);
      }
    } catch (message) {
      console.log("an message occured");
      console.error("GET user:", message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#8F00FF", alignItems: "center" }}>
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
      <View
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          marginTop: "20%",
          flex: 1,
          width: "100%",
          alignItems: "center",
          padding: "5%",
        }}
      >
        <Image
          source={require("../assets/profile.png")}
          style={{ marginTop: "5%" }}
        />
        <View style={{ width: "60%", marginVertical: "5%" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", marginRight: 20 }}>
              Phone No. :
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              {loading ? "loading" : data?.phone}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", marginRight: 20 }}>
              Wallet Price :
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              {loading ? "loading" : data?.walletPrice}
            </Text>
          </View>
        </View>
        <Text
          onPress={() => {
            navigation.navigate("History");
          }}
          style={{
            backgroundColor: "#8F00FF",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "600",
            color: "#fff",
            padding: "5%",
            borderRadius: 10,
          }}
        >
          View History
        </Text>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            right: 30,
            top: 30,
          }}
          onPress={() => {
            deleteValueFor("user")
              .then(() => {
                navigation.navigate("Login");
              })
              .catch((error) => {
                console.log("error in loggin out");
                console.log(error);
              });
          }}
        >
          <FontAwesome name="power-off" size={24} color="black" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",

              marginLeft: 10,
            }}
          >
            Log Out
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
