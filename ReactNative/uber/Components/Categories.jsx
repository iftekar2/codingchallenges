import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { flushSync } from "react-dom";

const items = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/3107/3107249.png",
    text: "Pick-up",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2405/2405597.png",
    text: "Drinks",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081918.png",
    text: "Bakery Items",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/9718/9718703.png",
    text: "Fast Food",
  },
];

export default function Categoryes() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: 15,
        backgroundColor: "#eee",
        borderRadius: 10,
        height: 100,
        paddingRight: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 30,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, marginTop: 3 }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
