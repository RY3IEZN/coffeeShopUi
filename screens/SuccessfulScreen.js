/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SuccessfulScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: "#B98068",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="check" size={200} color={"white"} />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontWeight: "700",
          fontSize: 20,
          color: "#B98068",
        }}
      >
        Order Succesful
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 20,
          color: "#B98068",
        }}
      >
        Your order will be delivered to you shortly...
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          width: 150,
          height: 50,
          backgroundColor: "#B98068",
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 40,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
          Back to home
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

export default SuccessfulScreen;
