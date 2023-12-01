import React from "react";
import { View, Text, Image, Pressable } from "react-native";

export default function Profile() {
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
              Oluwamofe James
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
              Computer Science
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
            <Text style={{ fontSize: 20, fontWeight: "500" }}>100404000</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", marginRight: 20 }}>
              Total Ride :
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>200</Text>
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
              fontWeight: 600,
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
