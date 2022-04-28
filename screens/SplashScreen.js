/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/coffeteklogo.png")} />

      <TouchableOpacity
        style={{
          width: 250,
          height: 50,
          backgroundColor: "#B98068",
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
          Let's get it
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#F8E8D4",
  },
});

export default SplashScreen;
