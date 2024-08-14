import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import ProductList from "../ProductList/ProductList";
import { CartContext } from "../../context/CartContext";
import { styles } from "./styles";

export default function ProductCard() {
  const [quantity, setQuantity] = useState("1");

  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    const numericQuantity = parseInt(quantity);
    if (numericQuantity >= 1 && numericQuantity <= 10) {
      addToCart(numericQuantity);
    }
  }

  function handleQuantityChange(value) {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (
      numericValue === "" ||
      (parseInt(numericValue) >= 1 && parseInt(numericValue) <= 10)
    ) {
      setQuantity(numericValue);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "product.imageUrl",
        }}
        overflow="hidden"
        style={styles.image}
      />
      <Text style={styles.productName}>product.name</Text>
      <Text style={styles.productPrice}>product.price</Text>

      <View style={styles.flexContainer}>
        <TouchableOpacity style={styles.quantityButton}>
          <TextInput
            style={styles.quantityInput}
            value={quantity}
            onChangeText={handleQuantityChange}
            keyboardType="numeric"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
      <ProductList />
    </View>
  );
}
