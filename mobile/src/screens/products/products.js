import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";

export default function Products() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <ScrollView>
        <ProductList />
      </ScrollView>
    </View>
  );
}
