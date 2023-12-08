import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fetcher from "../components/fetchData";
import Button from "../components/Button";
import { getValueFor } from "../storage";

export default function TicketDidplay({ route }: any) {
  const { location, price } = route.params?.data || null;

  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>([]);
  const navigation = useNavigation<any>();

  const handleRide = async () => {
    try {
      await getValueFor("user").then(async (userData: any) => {
        console.log("hi");
        console.log(JSON.parse(userData));
        console.log(JSON.parse(userData).matricNumber);
        console.log("something above");
        if (price > JSON.parse(userData).walletPrice) {
          setMessage(
            "Insufficent funds, Kindly fund your wallet and try again"
          );
          navigation.navigate("Fund");
        }
        try {
          await fetcher(
            `http://192.168.43.193:5000/api/v1/payment/${
              JSON.parse(userData).matricNumber
            }/ride`,
            "POST",
            setMessage,
            setData,
            {
              matricNumber: "1234",
              location,
              price,
            }
          ).then(() => {
            navigation.navigate("homeScreen");
          });
        } catch (error) {
          console.log("error in fetching from server - ticket", error);
        }
      });
    } catch (message) {
      console.log("an message occured");
      console.error("GET user:", message);
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
          Ticket Purchase
        </Text>
        <Text style={{ fontWeight: "500", fontSize: 16, textAlign: "center" }}>
          Kindly check the bus station to go with your desired vehicle aafter
          this puchase
        </Text>
        <Text style={{ marginTop: 20 }}>Location : {location}</Text>
        {/* <Text style={{ marginTop: 20 }}>Order No. : 1234</Text> */}
        {/* <Text style={{ marginTop: 20 }}>status : Paid</Text> */}
        <Text style={{ marginTop: 20, marginBottom: 40 }}>
          Amount : #{price}
        </Text>
        <View>
          <Button
            onPress={() => {
              handleRide();
            }}
            bgColor="#8F00FF"
            color="#fff"
            text="Confirm Ride"
            fontSize={20}
          />
        </View>
      </View>
    </View>
  );
}
