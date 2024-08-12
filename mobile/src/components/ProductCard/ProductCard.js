import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../../context/CartContext";
import ProductList from "../ProductList/ProductList";

export default function ProductCard() {
  const { addToCart } = useContext(CartContext);

  return (
    <View>
      <Text> Card com os produtos</Text>
      <ProductList />
      <Button title="Adicionar ao carrinho" onPress={addToCart} />
    </View>
  );
}
