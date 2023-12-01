import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TicketDidplay() {
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1, padding: "5%" }}>
      <View
        style={{
          borderRadius: 16,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#8F00FF",
          alignItems: "center",
          paddingVertical: "10%",
          paddingHorizontal: "5%",
        }}
      >
        <MaterialCommunityIcons
          name="ticket-confirmation"
          size={50}
          color="black"
        />
        <Text
          style={{ fontWeight: "700", fontSize: 25, marginVertical: "10%" }}
        >
          Ticket Purchase Successful
        </Text>
        <Text style={{ fontWeight: "500", fontSize: 16, textAlign: "center" }}>
          Kindly check the bus station to go with your desired vehicle
        </Text>
        <Text style={{ marginTop: 20 }}>Location : Senate Building</Text>
        <Text style={{ marginTop: 20 }}>Order No. : 1234</Text>
        <Text style={{ marginTop: 20 }}>status : Paid</Text>
        <Text style={{ marginTop: 20 }}>Amount : #50</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <Text
          style={{
            color: "#8F00FF",
            textDecorationLine: "underline",
            textAlign: "center",
            marginTop: "10%",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Back to home
        </Text>
      </Pressable>
    </View>
  );
}
