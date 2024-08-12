import React, { useContext } from "react";
import { View, Button, Text } from "react-native";
import { CartContext } from "../../context/CartContext";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function CartItem() {
  const { resetCart } = useContext(CartContext);
  const navigation = useNavigation();

  function handleBackProductCard() {
    navigation.navigate("Product");
    resetCart();
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}> Itens no carrinho </Text>
      <Button title="Voltar" onPress={handleBackProductCard} />
    </View>
  );
}
