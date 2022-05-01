/** @format */

import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function OrderDetails({ route, navigation }) {
  let [count, setCount] = useState(0);
  let [selected, setSelected] = useState(false);

  let item = route.params;

  let multiply = (a, b) => {
    return a * b;
  };

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };

  const LineDivider = () => {
    return (
      <View
        style={{ width: "100%", height: 2, backgroundColor: "lightgrey" }}
      ></View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
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
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: "#B98068",
            fontWeight: "700",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Prefernces
        </Text>
      </View>
      {/* details */}
      <View
        style={{ width: "100%", height: 2, backgroundColor: "lightgrey" }}
      ></View>
      <View>
        <ImageBackground
          source={require("../assets/bg.png")}
          style={{ width: "100%", height: 150 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 50,
            }}
          >
            <Image source={item.img} />
          </View>
        </ImageBackground>
        <LineDivider />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 15, fontWeight: "300" }}>
            {item.price} USD
          </Text>
        </View>
        {/* COUNT */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontWeight: "300",
              marginRight: 10,
            }}
          >
            {count}
          </Text>
          <TouchableOpacity
            onPress={decrement}
            style={{
              width: 40,
              height: 30,
              borderColor: "black",
              borderWidth: 2,
              justifyContent: "center",
              borderBottomLeftRadius: 15,
              borderTopLeftRadius: 15,
              alignItems: "center",
              marginRight: 5,
            }}
          >
            <MaterialCommunityIcons name="minus" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={increment}
            style={{
              width: 40,
              height: 30,
              borderColor: "black",
              borderWidth: 2,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="plus-thick" size={15} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <LineDivider />
      {/* cup size */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "300" }}>Cup Size</Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              style={{
                marginHorizontal: 20,
              }}
              source={require("../assets/cupsmall.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected(!selected)}>
            <Image
              style={{
                tintColor: !selected === true ? "red" : "green",
                marginHorizontal: 20,
              }}
              source={require("../assets/cupmedium.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelected(true)}>
            <Image
              style={{
                marginHorizontal: 20,
                tintColor: selected === false ? "green" : "red",
              }}
              source={require("../assets/cuplarge.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <LineDivider />
      {/* sugar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "300" }}>Sugar</Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ marginHorizontal: 20 }}
            source={require("../assets/nosugar.png")}
          />
          <Image
            style={{ marginHorizontal: 20 }}
            source={require("../assets/onesugar.png")}
          />
          <Image
            style={{ marginHorizontal: 20 }}
            source={require("../assets/2sugar.png")}
          />
          <Image
            style={{ marginHorizontal: 10 }}
            source={require("../assets/3sugar.png")}
          />
          <Text style={{ marginHorizontal: 5 }}>More</Text>
        </View>
      </View>
      <LineDivider />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginVertical: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "300" }}>Additions</Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
              style={{ marginHorizontal: 20 }}
              source={require("../assets/cream.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
              style={{ marginHorizontal: 20 }}
              source={require("../assets/flower.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <LineDivider />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#B98068", fontWeight: "300", fontSize: 30 }}>
          Total :{" "}
        </Text>
        <Text style={{ color: "#B98068", fontWeight: "300", fontSize: 30 }}>
          {multiply(count, item.price).toFixed(1)} USD
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: 370,
          height: 50,
          backgroundColor: "#B98068",
          marginVertical: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
          Order Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OrderDetails;
