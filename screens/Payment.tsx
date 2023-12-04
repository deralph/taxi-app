import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Paystack } from "react-native-paystack-webview";
import fetchData from "../components/fetchData";
import fetcher from "../components/fetchData";

export default function Payment() {
  const navigation = useNavigation<any>();

  const [amount, setAmount] = useState("");
  const [pay, setPay] = useState(false);

  const [message, setMessage] = React.useState("");
  const [data, setData] = React.useState<any>();

  const makePayment = async (res: any) => {
    try {
      const postData = {
        matricNumber: "1234",
        amount,
        ...res.data,
      };
      await fetcher(
        "http://192.168.43.193:5000/api/v1/payment/123/payment",
        "POST",
        setMessage,
        setData,
        postData
      );
      if (data) {
        navigation.navigate("Main");
      }
    } catch (error) {
      console.log("an error occured");
    }
  };

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
        Enter Amount
      </Text>
      <TextInput
        placeholderTextColor={"#ACACAC"}
        placeholder="#50 - #10000"
        selectionColor="#fff "
        keyboardType="numeric"
        style={{
          fontSize: 16,
          borderColor: "#ACACAC",
          borderWidth: 2,
          borderStyle: "solid",
          color: "#ACACAC",
          borderRadius: 10,
          height: 60,
          paddingLeft: 20,
          width: "100%",
          marginBottom: 20,
          fontWeight: "600",
        }}
        value={amount}
        onChange={(value) => setAmount(value.nativeEvent.text)}
      />
      <Text
        style={{
          backgroundColor: "#8F00FF",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "600",
          color: "#fff",
          padding: "5%",
          borderRadius: 10,
        }}
        onPress={() => setPay(true)}
      >
        Pay #{amount}
      </Text>
      {pay ? (
        <Paystack
          paystackKey="pk_test_62ba3fa4e30ace38c25feca74eae65646f1cf095"
          amount={amount}
          billingEmail="paystackwebview@something.com"
          activityIndicatorColor="#8F00FF"
          onCancel={(e) => {
            // handle response here
            setPay(false);
            navigation.navigate("Main");
          }}
          onSuccess={(res) => {
            // handle response here
            setPay(false);
            console.log(res);
            if (res.data.event === "successful") {
              makePayment(res);
              navigation.navigate("Profile");
            }
          }}
          autoStart={true}
        />
      ) : null}
    </View>
  );
}
