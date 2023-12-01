import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./components/navigation";
import { StatusBar } from "react-native";
import CustomSplash from "./screens/CustomSplash";
import { useState } from "react";

const Stack = createNativeStackNavigator();
export default function MainApp() {
  const [splashCompleete, setSplashCompleete] = useState(false);

  return (
    <>
      <StatusBar backgroundColor={"#929292"} />
      {splashCompleete ? (
        <Navigation />
      ) : (
        <CustomSplash onComplete={setSplashCompleete} />
      )}
    </>
  );
}
