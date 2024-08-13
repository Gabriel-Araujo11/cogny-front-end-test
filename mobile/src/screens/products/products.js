import React from "react";
import { View, Text, ScrollView } from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";

export default function Products() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <ScrollView>
        {/* TEST PADDING */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    </View>
  );
}
