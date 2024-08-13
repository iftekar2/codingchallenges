import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTab from "../Components/HeaderTab";
import SearchBar from "../Components/SearchBar";
import Categoryes from "../Components/Categories";
import ResturantItems from "../Components/ResturantItems";

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
          <ResturantItems />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
