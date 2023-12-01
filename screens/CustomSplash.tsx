import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { hideAsync } from "expo-splash-screen";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

type prop = {
  onComplete: (status: boolean) => void;
};

function CustomSplash({ onComplete }: prop) {
  // console.log(status);
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }
      if (status.didJustFinish) {
        onComplete(true);
      }
      setStatus(() => status);
    }
  }
  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.STRETCH}
      source={require("../assets/splashVideo.mp4")}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay
    />
  );
}

export default CustomSplash;
