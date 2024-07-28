import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTab from "../Components/HeaderTab";
import SearchBar from "../Components/SearchBar";
import Categoryes from "../Components/Categories";
import ResturantItem from "../Components/ResturantItem";

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categoryes />
          <ResturantItem />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
