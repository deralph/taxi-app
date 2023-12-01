import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HistoryBox() {
  return (
    <View
      style={{
        padding: "5%",
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dadada",
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ color: "#080A24", fontSize: 16, fontWeight: "500" }}>
            <Ionicons name="location" size={24} color="#8F00FF" /> Location :
          </Text>
          <Text style={{ color: "#929292", fontSize: 14, fontWeight: "500" }}>
            Senate Building
          </Text>
        </View>
        <View>
          <Text style={{ color: "#080A24", fontSize: 16, fontWeight: "500" }}>
            Price
          </Text>
          <Text style={{ color: "#929292", fontSize: 14, fontWeight: "500" }}>
            #50
          </Text>
        </View>
      </View>
      <Text style={{ marginTop: "2%", color: "#bbb", fontSize: 12 }}>
        28/11/2023
      </Text>
    </View>
  );
}

export default HistoryBox;
