import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../../context/CartContext";

export default function ProductCard() {
  const { addToCart } = useContext(CartContext);

  return (
    <View>
      <Text> Card com os produtos</Text>
      <Button title="Adicionar ao carrinho" onPress={addToCart} />
    </View>
  );
}
