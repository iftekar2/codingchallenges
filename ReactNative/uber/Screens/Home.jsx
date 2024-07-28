import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTab from "../Components/HeaderTab";
import SearchBar from "../Components/SearchBar";
import Categoryes from "../Components/Categories";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          marginLeft: 3,
          marginRight: 3,
        }}
      >
        <HeaderTab />
        <SearchBar />
        <Categoryes />
      </View>
    </SafeAreaView>
  );
}
