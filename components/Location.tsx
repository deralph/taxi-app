import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { loc } from "./data";

export default function Location({ location, price, time }: loc) {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        paddingVertical: 14,
        paddingHorizontal: 16,
        gap: 12,
        minWidth: "47%",
        marginVertical: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dadada",
      }}
    >
      <Text style={{ color: "#151513", fontWeight: "600", fontSize: 16 }}>
        {location}
      </Text>
      <Text style={{ color: "#929292", fontSize: 12, fontWeight: "500" }}>
        {time}
      </Text>
      <Text style={{ color: "#000", fontSize: 12, fontWeight: "700" }}>
        {price}
      </Text>
      <Pressable
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#000",
          borderRadius: 40,
          padding: 5,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() =>
          navigation.navigate("Ticket", { data: { location, price } })
        }
      >
        <Text
          style={{
            color: "#151513",
            fontWeight: "700",
            fontSize: 12,
            marginRight: 10,
          }}
        >
          Book Now
        </Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
      </Pressable>
    </View>
  );
}
