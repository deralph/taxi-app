import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import HistoryBox, { ride } from "../components/HistoryBox";
import fetchData from "../components/fetchData";
import fetcher from "../components/fetchData";
import { getValueFor } from "../storage";

type User = {
  name: string;
  course: string;
  phone: string;
  password: string | any;
  walletPrice: number;
  createdAt: string;
};

export default function History() {
  const [data, setData] = useState<any>([]);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const getData = async () => {
    try {
      const paul = await getValueFor("user");
      console.log("hi");
      console.log(paul);
      console.log("something above");
      const p = JSON.parse(paul!).phone;
      try {
        await fetcher(
          `http://192.168.43.193:5000/api/v1/payment/${p}/getRide`,
          "GET",
          setMessage,
          setData
        );
        if (data) {
          setData(data.ride);
          setLoading(false);
          // navigation.navigate("Main");
        }
      } catch (error) {
        console.log("error in fetching from server", error);
      }
    } catch (message) {
      console.log("an message occured");
      console.error("GET user:", message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ padding: "5%" }}>
      <Text style={{ fontSize: 24, fontWeight: "600", marginVertical: "5%" }}>
        History
      </Text>
      {loading ? <Text>Loading</Text> : null}
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
      {data?.length < 1 ? (
        <Text style={{ fontSize: 16, fontWeight: "500", marginVertical: "5%" }}>
          No available history
        </Text>
      ) : (
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
      )}
    </View>
  );
}
