/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Menu from "../data/menu";
import { MaterialCommunityIcons } from "@expo/vector-icons";

Menu;

function MenuList({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item);
          navigation.navigate("OrderDetails", item);
        }}
        style={{
          marginHorizontal: 40,
          margin: 20,
          width: "80%",
          height: 80,
          backgroundColor: "#B98068",
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            alignItems: "center",
          }}
        >
          <Image source={item.img} />
          <Text style={{ margin: 5 }}>{item.name}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={30} color="black" />
      </TouchableOpacity>
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
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Pick your drink
        </Text>
        <FlatList data={Menu} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MenuList;
