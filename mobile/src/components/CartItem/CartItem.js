import React, { useContext } from "react";
import { View, Button, Text } from "react-native";
import { CartContext } from "../../context/CartContext";
import { useNavigation } from "@react-navigation/native";

export default function CartItem() {
  const { resetCart } = useContext(CartContext);
  const navigation = useNavigation();

  function handleBackProductCard() {
    navigation.navigate("Product");
    resetCart();
  }

  return (
    <View>
      <Button title="Voltar" onPress={handleBackProductCard} />
    </View>
  );
}
