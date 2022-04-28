/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 70,
          marginHorizontal: 30,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={24}
          color="black"
        />
        <Text
          style={{
            color: "#B98068",
            marginLeft: 130,
            fontWeight: "700",
            fontSize: 25,
          }}
        >
          Login
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ color: "#B98068", fontWeight: "300", fontSize: 40 }}>
          Welcome back!
        </Text>
      </View>
      {/* Textinput Containers */}
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "700",
            fontSize: 15,
            color: "#B98068",
            margin: 5,
          }}
        >
          Email
        </Text>
        <TextInput />
        <View
          style={{
            width: "90%",
            height: 1,
            color: "brown",
            borderWidth: 1,
            borderColor: "brown",
          }}
        ></View>
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "700",
            fontSize: 15,
            color: "#B98068",
            margin: 5,
          }}
        >
          Password
        </Text>
        <TextInput secureTextEntry={true} />
        <View
          style={{
            width: "90%",
            height: 1,
            color: "brown",
            borderWidth: 1,
            borderColor: "brown",
          }}
        ></View>
        <TouchableOpacity
          style={{ flexDirection: "row-reverse", marginVertical: 15 }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 15,
              color: "#B98068",
              margin: 5,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 370,
            height: 50,
            backgroundColor: "#B98068",
            marginVertical: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 15, color: "white" }}>
            Log In
          </Text>
        </TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>
            Dont have an account?
            <Text
              style={{
                fontWeight: "700",
                fontSize: 15,
                color: "#B98068",
                margin: 5,
              }}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
