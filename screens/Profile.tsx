import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import fetchData from "../components/fetchData";

type profileType = {
  name: string;
  course: string;
  matricNumber: string;
  password: string | any;
  walletPrice: number;
  createdAt: Date;
};

export default function Profile() {
  const [profile, setProfile] = useState<profileType>();
  const getProfile = () => {
    fetchData<{ key: string }>("http://localhost:3000/api/v1/auth/1234", {
      method: "GET",
    })
      .then((data: any) => {
        setProfile(data.user);
        console.log("GET Data:", data);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  };
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  return (
    <View style={{ flex: 1, backgroundColor: "#8F00FF", alignItems: "center" }}>
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
              {profile?.name}
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
              {profile?.course}
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
              {profile?.matricNumber}
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
              {profile?.walletPrice}
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
