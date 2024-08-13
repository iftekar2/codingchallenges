import { SafeAreaView, ScrollView, View } from "react-native";
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
          flex: 1,
        }}
      >
        <HeaderTab />
        <SearchBar />
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categoryes />
            <ResturantItems />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
