import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row", marginBottom: 10 }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyAuxk_t-1gDYF5JI25ms3YARVkz0IkiIS4" }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 50,
            fontWeight: 700,
            fontSize: 20,
            height: 55,
            marginBottom: 0,
          },

          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 3,
              height: 50,
              width: 75,
              borderRadius: 90,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="search-sharp" size={35} />
          </View>
        )}
      />
    </View>
  );
}
