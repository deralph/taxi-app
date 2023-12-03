import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import HistoryBox, { ride } from "../components/HistoryBox";
import fetchData from "../components/fetchData";

export default function History() {
  const [data, setData] = useState<ride[]>([]);
  const [error, setError] = useState(false);
  const getData = () => {
    fetchData<{ key: string }>(
      "http://localhost:3000/api/v1/payment/123/getRide",
      {
        method: "GET",
      }
    )
      .then((data: any) => {
        console.log("GET Data:", data);
        setData(data.Payments);
      })
      .catch((error) => {
        console.error("GET Error:", error);
        setError(true);
      });
  };
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <View style={{ padding: "5%" }}>
      <Text style={{ fontSize: 24, fontWeight: "600", marginVertical: "5%" }}>
        History
      </Text>
      {data.length < 1 ? (
        <Text style={{ fontSize: 16, fontWeight: "500", marginVertical: "5%" }}>
          No available history
        </Text>
      ) : null}

      {error ? (
        <Text
          style={{
            color: "#f00",
            fontSize: 16,
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          Incorrect password or Matric number
        </Text>
      ) : null}
      <FlatList
        contentContainerStyle={{
          marginVertical: "2%",
        }}
        // numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 10 }}>
            <HistoryBox {...item} />
          </View>
        )}
      />
    </View>
  );
}
