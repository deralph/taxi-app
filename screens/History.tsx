import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import HistoryBox, { ride } from "../components/HistoryBox";
import fetchData from "../components/fetchData";
import fetcher from "../components/fetchData";
import { getValueFor } from "../storage";

type User = {
  name: string;
  course: string;
  matricNumber: string;
  password: string | any;
  walletPrice: number;
  createdAt: string;
};

export default function History() {
  const [data, setData] = useState<any>([]);
  const [message, setMessage] = React.useState("");
  const getData = async () => {
    try {
      await getValueFor("user").then(async (userData: any) => {
        console.log("hi");
        console.log(JSON.parse(userData));
        console.log(JSON.parse(userData).matricNumber);
        console.log("something above");
        try {
          await fetcher(
            `http://192.168.43.193:5000/api/v1/payment/${
              JSON.parse(userData).matricNumber
            }/getRide`,
            "GET",
            setMessage,
            setData
          );
          if (data) {
            setData(data.ride);
            // navigation.navigate("Main");
          }
        } catch (error) {
          console.log("error in fetching from server", error);
        }
      });
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
      {data?.length < 1 ? (
        <Text style={{ fontSize: 16, fontWeight: "500", marginVertical: "5%" }}>
          No available history
        </Text>
      ) : null}

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
      {data ? (
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
      ) : null}
    </View>
  );
}
