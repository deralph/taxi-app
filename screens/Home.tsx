import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  View,
} from "react-native";
import Button from "../components/Button";
import Location from "../components/Location";
import { locations } from "../components/data";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/akungbaMap.png")}
        style={{ height: "50%", objectFit: "cover" }}
      />
      <Text
        style={{
          color: "#080A24",
          fontSize: 20,
          fontWeight: "700",
          padding: "5%",
        }}
      >
        Where are you going today?
      </Text>
      <FlatList
        contentContainerStyle={{
          marginVertical: "2%",
          flexDirection: "column",
          justifyContent: "space-evenly",
          paddingBottom: 20,
        }}
        numColumns={2}
        data={locations}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 10 }}>
            <Location {...item} />
          </View>
        )}
      />
    </View>
  );
}
