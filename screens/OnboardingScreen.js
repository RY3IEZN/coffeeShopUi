/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("screen");

function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/coffetruck.png")}
        resizeMode="cover"
        style={{
          marginTop: 60,
          width: width,
        }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ color: "#B98068", fontSize: 30 }}>
          Get the Best Coffee
        </Text>
        <Text style={{ color: "#B98068", fontSize: 30 }}>in town!</Text>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 50,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
            style={{
              width: 150,
              height: 50,
              backgroundColor: "#B98068",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
              Register
            </Text>
          </TouchableOpacity>
          <View style={{ width: 50 }}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
            style={{
              width: 150,
              height: 50,
              backgroundColor: "white",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#B98068",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 20, color: "#B98068" }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              width: 350,
              height: 50,
              backgroundColor: "white",
              marginTop: 30,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#4277BC",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/facebook.png")}
                style={{ marginRight: 5 }}
              />
              <Text
                style={{ fontWeight: "700", fontSize: 15, color: "#4277BC" }}
              >
                Connect With Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
