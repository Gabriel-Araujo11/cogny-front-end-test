import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../../context/CartContext";
import ProductList from "../ProductList/ProductList";
import { styles } from "./styles";

export default function ProductCard() {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}> Card com os produtos</Text>
      <ProductList />
      <Button title="Adicionar ao carrinho" onPress={addToCart} />
    </View>
  );
}
