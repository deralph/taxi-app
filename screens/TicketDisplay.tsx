import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fetcher from "../components/fetchData";
import Button from "../components/Button";

export default function TicketDidplay({ route }: any) {
  const { location, price } = route.params?.data || null;

  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>([]);
  const navigation = useNavigation<any>();

  // ride {
  //   matricNumber: string;
  //   location: string | any;
  //   price: number;
  //   createdAt?: Date;
  // }
  const postData = {
    matricNumber: "1234",
    location,
    price,
  };

  const handleRide = async () => {
    try {
      await fetcher(
        "http://192.168.43.193:5000/api/v1/payment/1234/ride",
        "POST",
        setMessage,
        setData,
        postData
      ).then(() => navigation.navigate("homeScreen"));
    } catch (error) {
      console.log("an error occured");
    }
  };

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
      <Pressable onPress={() => handleRide}>
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
          Confirm Ride
        </Text>
        <Button
          onPress={handleRide}
          bgColor="#8F00FF"
          color="#fff"
          text="Confirm Ride"
          fontSize={20}
        />
      </Pressable>
    </View>
  );
}
