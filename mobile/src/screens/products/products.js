import React from "react";
import { View, Text } from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";

export default function Products() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <ProductCard />
    </View>
  );
}
