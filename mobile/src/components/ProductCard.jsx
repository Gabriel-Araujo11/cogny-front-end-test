import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard() {
  const navigation = useNavigation();

  const handleAddToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View>
      <Text> Card com os produtos</Text>
      <TextInput keyboardType="numeric" />
      <Button title="Adicionar ao carrinho" onPress={handleAddToCart} />
    </View>
  );
}
