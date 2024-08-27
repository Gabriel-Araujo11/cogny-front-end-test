import React from "react";
import { View } from "react-native";
import CartItem from "../CartItem/CartItem";
import { products } from "../utils/productsData";

export default function CartList() {
  return (
    <View>
      <ScrollView>
        {products.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </ScrollView>
    </View>
  );
}
