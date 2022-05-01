/** @format */

import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Map.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 300,
            left: 100,
            flexDirection: "row-reverse",
          }}
        >
          <Image source={require("../assets/location1.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 180,
            left: 300,
            flexDirection: "row-reverse",
          }}
        >
          <Image source={require("../assets/location2.png")} />
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: 500,
            backgroundColor: "#F8E8D4",
            position: "absolute",
            top: 500,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 10,
              borderColor: "#B98068",
              backgroundColor: "#B98068",
              borderRadius: 20,
              borderWidth: 1,
              marginHorizontal: 170,
            }}
          ></View>
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Available locations
          </Text>
          <View
            style={{
              width: "90%",
              height: 100,
              backgroundColor: "white",
              marginHorizontal: 20,
              marginTop: 10,
              borderRadius: 15,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 20,
              }}
            >
              <View>
                <Text>Starbucks Coffee Shop</Text>
                <Text>No.57, Ontario Crescent,</Text>
                <Text>0.47m</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.replace("MenuList");
                  }}
                  style={{
                    width: 70,
                    height: 50,
                    backgroundColor: "#B98068",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text
                    style={{ fontWeight: "700", fontSize: 20, color: "white" }}
                  >
                    Menu
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              height: 100,
              backgroundColor: "white",
              marginHorizontal: 20,
              marginTop: 10,
              borderRadius: 15,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 20,
              }}
            >
              <View>
                <Text>Nosta Coffee Shop</Text>
                <Text>No.57, Ontario Crescent,</Text>
                <Text>0.47m</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("MenuList");
                  }}
                  style={{
                    width: 70,
                    height: 50,
                    backgroundColor: "#B98068",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text
                    style={{ fontWeight: "700", fontSize: 20, color: "white" }}
                  >
                    Menu
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
