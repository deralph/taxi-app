import React from "react";
import { SafeAreaView, View, Text, Image, ImageBackground } from "react-native";

export default function Onboard({ navigation }: any) {
  //   const navigation = useNavigation<any>();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("../assets/akungbaMap.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      >
        <View
          style={{
            backgroundColor: "rgba(225,225,225,0.8)",
            flex: 1,
            padding: "5%",
            alignItems: "center",
            // justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 60,
              alignItems: "center",
              justifyContent: "center",
              height: 120,
              width: 120,
              marginTop: "30%",
            }}
          >
            <Image
              source={require("../assets/logo.jpg")}
              style={{ objectFit: "cover", borderRadius: 60 }}
            />
          </View>
          <Text
            style={{
              // color: "#fff",
              fontSize: 40,
              marginTop: "20%",
              textAlign: "center",
            }}
          >
            Get shuttle to anywhere on campus
          </Text>
          <Text
            style={{
              // color: "#fff",
              fontSize: 16,
              lineHeight: 26,
              width: "60%",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Your reliable shuttle booking app
          </Text>
          <View style={{ marginTop: "20%" }}>
            <Text
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{
                borderColor: "#8F00FF",
                paddingHorizontal: "20%",
                paddingVertical: 10,
                borderRadius: 20,
                borderStyle: "solid",
                borderWidth: 1,
                fontSize: 20,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
