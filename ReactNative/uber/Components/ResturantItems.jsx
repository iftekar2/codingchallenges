import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// export const localResturents = [
//   {
//     name: "Beachside Bar",
//     image_url:
//       "https://www.nusaduahotel.com/wp-content/uploads/2018/10/NDBHS_CHESS_BAR_01_MAINPICTURE-2024-jpg.webp",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1234,
//     ratings: 4.5,
//   },
//   {
//     name: "Benihana",
//     image_url:
//       "https://storage.googleapis.com/benihana-2020-238473673204-wp-data/wp-media/orlando_florida.jpg",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1234,
//     ratings: 3.2,
//   },
//   {
//     name: "India's Grill",
//     image_url:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtyDGzdK1HcA63G42Kl_n_wW8uzWGtbwIOWzluTa5iPSGzOsq5vSi56KCsB_HlNSM2GXnwKXe1ZVm5MlHO2dMZ4doJmBRDO7kG35bFUtDAiqWWkPziJUANuXfLPQYjjiEXW6RT7__v6iua/s1600/i1.jpg",
//     categories: ["Indian", "Grill"],
//     price: "$$",
//     reviews: 3452,
//     ratings: 4.9,
//   },
// ];

export default function RestaurantItems() {
  return (
    <View style={styles.viewStyle}>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.peninsula.com/-/media/images/bangkok/new/dining/thiptara/pbk-thiptara-3-1074.jpg?mw=987&hash=107E6AA78B323EAA3D17282F3AEC88D5",
        }}
      />

      <TouchableOpacity style={styles.opacity}>
        <Ionicons style={styles.icon} name="heart-outline" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 10,
  },

  image: {
    height: 200,
    width: 400,
  },

  icon: {
    fontSize: 25,
    color: "white",
  },

  opacity: {
    position: "absolute",
    right: 15,
    top: 10,
  },
});
