import { View, Text, Pressable, Platform, FlexAlignType } from "react-native";
import React from "react";

export default function Button({
  onPress,
  icon,
  text,
  bgColor = "white",
  color,
  alignSelf = "flex-start",
  fontSize,
}: {
  onPress: () => void;
  text?: string;
  bgColor?: string;
  icon?: JSX.Element;
  color?: string;
  alignSelf?: FlexAlignType;
  fontSize?: number;
}) {
  return (
    <View style={{ overflow: "hidden", alignSelf, borderRadius: 32 }}>
      <Pressable
        android_ripple={{ color }}
        onPress={onPress}
        style={({ pressed }) => {
          return {
            opacity: Platform.OS === "ios" && pressed ? 0.5 : 1,
            paddingHorizontal: 18,
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: bgColor,
            minWidth: "50%",
            justifyContent: "space-evenly",
          };
        }}
      >
        {icon}
        <Text
          style={{
            color,
            // fontFamily: "poppinsMedium",
            fontSize: fontSize || 16,
            // width: "100%",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
}
