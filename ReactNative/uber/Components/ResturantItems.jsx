import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RestaurantItems() {
  const [localResturents, setLocalResturents] = useState([]);
  const getRestaurantFromYelp = async () => {
    const yelpURL =
      "https://api.yelp.com/v3/businesses/search?term=restaurans&location=SanDiego";

    const apiOption = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
      },
    };
    return fetch(yelpURL, apiOption)
      .then((res) => res.json())
      .then((json) => setLocalResturents(json.businesses));
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, []);

  return (
    <View style={styles.viewStyle}>
      {localResturents.map((restaurant, index) => (
        <View key={index} style={styles.inerView}>
          <Image
            style={styles.image}
            source={{
              uri: `${restaurant.image_url}`,
            }}
          />
          <TouchableOpacity style={styles.opacity}>
            <Ionicons style={styles.icon} name="heart-outline" />
          </TouchableOpacity>
          <View style={styles.restaurantDescriptionStyle}>
            <View style={styles.stylingRestaurantTitle}>
              <Text style={styles.titleStyle}>{restaurant.name}</Text>
              <Text>30-45 • min</Text>
            </View>
            <Text>{restaurant.rating}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 10,
  },

  inerView: {
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 15,
  },

  image: {
    height: 200,
    width: "100%",
    borderRadius: 15,
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

  restaurantDescriptionStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 10,
  },

  titleStyle: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "600",
  },
});
