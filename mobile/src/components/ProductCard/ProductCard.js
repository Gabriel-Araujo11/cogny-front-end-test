import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { CartContext } from "../../context/CartContext";
import { styles } from "./styles";

export default function ProductCard({ id, imageUrl, name, price }) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart, updateQuantity } = useContext(CartContext);

  function handleAddToCart() {
    if (quantity >= 1 && quantity <= 10) {
      addToCart({ id, name, price, imageUrl }, quantity);
    }
  }

  function handleQuantityChange(value) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 10) {
      setQuantity(parsedValue);
    } else if (value === "") {
      setQuantity("");
    }
  }

  useEffect(() => {
    if (quantity >= 1 && quantity <= 10) {
      updateQuantity(id, quantity);
    }
  }, [quantity]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        overflow="hidden"
        style={styles.image}
      />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>
        R$ {(price / 100).toFixed(2).replace(".", ",")}
      </Text>

      <View style={styles.flexContainer}>
        <TouchableOpacity style={styles.quantityButton}>
          <TextInput
            style={styles.quantityInput}
            value={quantity.toString()}
            onChangeText={handleQuantityChange}
            keyboardType="numeric"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
