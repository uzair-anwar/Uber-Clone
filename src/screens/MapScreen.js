import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "../Components/Map";
const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <Text>MapScreen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
