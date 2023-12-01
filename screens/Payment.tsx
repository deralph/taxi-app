import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Payment() {
  const navigation = useNavigation<any>();
  return (
    <View style={{ padding: "5%" }}>
      <Text style={{ fontSize: 24, fontWeight: "600", marginVertical: "5%" }}>
        Pay With Card
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          color: "#0A0D13",
          marginBottom: 10,
          marginTop: "10%",
        }}
      >
        Card Number
      </Text>
      <TextInput
        placeholderTextColor={"#ACACAC"}
        placeholder="1234 5678 9101 1121"
        selectionColor="#fff "
        style={{
          fontSize: 16,
          borderColor: "#ACACAC",
          borderWidth: 2,
          borderStyle: "solid",
          color: "#fff",
          borderRadius: 10,
          height: 60,
          paddingLeft: 20,
          width: "100%",
          marginBottom: 20,
          fontWeight: "600",
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 0.45 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "#0A0D13",
              marginBottom: 10,
            }}
          >
            Expiration Date
          </Text>
          <TextInput
            placeholderTextColor={"#ACACAC"}
            placeholder="MM/YY"
            selectionColor="#fff "
            style={{
              fontSize: 16,
              borderColor: "#ACACAC",
              borderWidth: 2,
              borderStyle: "solid",
              color: "#fff",
              borderRadius: 10,
              height: 60,
              paddingLeft: 20,
              width: "100%",
              marginBottom: 20,
              fontWeight: "600",
            }}
          />
        </View>
        <View style={{ flex: 0.45 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "#0A0D13",
              marginBottom: 10,
            }}
          >
            CVV
          </Text>
          <TextInput
            placeholderTextColor={"#ACACAC"}
            placeholder="123"
            selectionColor="#fff "
            style={{
              fontSize: 16,
              borderColor: "#ACACAC",
              borderWidth: 2,
              borderStyle: "solid",
              color: "#fff",
              borderRadius: 10,
              height: 60,
              paddingLeft: 20,
              width: "100%",
              marginBottom: 20,
              fontWeight: "600",
            }}
          />
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Ticket");
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
          Pay #50
        </Text>
      </Pressable>
    </View>
  );
}
