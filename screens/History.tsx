import React from "react";
import { View, Text, FlatList } from "react-native";
import HistoryBox from "../components/HistoryBox";

export default function History() {
  return (
    <View style={{ padding: "5%" }}>
      <Text style={{ fontSize: 24, fontWeight: "600", marginVertical: "5%" }}>
        History
      </Text>
      <FlatList
        contentContainerStyle={{
          marginVertical: "2%",
        }}
        // numColumns={2}
        data={[0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6]}
        renderItem={() => (
          <View style={{ paddingHorizontal: 10 }}>
            <HistoryBox />
          </View>
        )}
      />
    </View>
  );
}
