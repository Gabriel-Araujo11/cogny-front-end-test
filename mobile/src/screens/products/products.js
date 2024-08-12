import React from "react";
import { View } from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";

export default function Products() {
  return (
    <View>
      <Header />
      <ProductCard />
    </View>
  );
}
