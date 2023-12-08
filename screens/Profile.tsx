import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import fetchData from "../components/fetchData";
import fetcher from "../components/fetchData";
import { getValueFor } from "../storage";
import { useNavigation } from "@react-navigation/native";

type profileType = {
  name: string;
  course: string;
  matricNumber: string;
  password: string | any;
  walletPrice: number;
  createdAt: Date;
};

export default function Profile() {
  const navigation = useNavigation<any>();
  const [profile, setProfile] = useState<profileType>();
  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>();

  const getProfile = async () => {
    try {
      await getValueFor("user").then(async (userData: any) => {
        console.log("hi");
        console.log(JSON.parse(userData));
        console.log(JSON.parse(userData).matricNumber);
        console.log("something above");

        try {
          await fetcher(
            `http://192.168.43.193:5000/api/v1/auth/${
              JSON.parse(userData).matricNumber
            }`,
            "GET",
            setMessage,
            setData
          ).then(() => {
            setData(data.user);
            console.log("GET Data:", data);
          });
        } catch (error) {
          console.log("error in fetching from server - ticket", error);
        }
      });
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
              Name :
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              {data?.name}
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
              Course :
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              {data?.course}
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
              Matric No. :
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              {data?.matricNumber}
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
              {data?.walletPrice}
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            // navigation.navigate("Ticket");
          }}
        >
          <Text
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
            Sponsor Project
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
