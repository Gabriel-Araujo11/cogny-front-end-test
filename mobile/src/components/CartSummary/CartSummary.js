import React, { useContext } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { CartContext } from "../../context/CartContext";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import CartItem from "../../components/CartItem/CartItem";

export default function CartSummary() {
  const { cartItems, resetCart } = useContext(CartContext);
  const navigation = useNavigation();

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  function handleCheckout() {
    if (total === 0) {
      Alert.alert("Carrinho vazio", "Não existe nenhum produto no carrinho.");
    } else {
      Alert.alert(
        "Pedido finalizado!",
        "Seu pedido foi finalizado com sucesso!"
      );
      resetCart();
    }
  }

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>O Carrinho está vazio.</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Products")}>
            <View style={[styles.button, styles.backButton]}>
              <Text style={styles.buttonText}>VOLTAR</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <CartItem />
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>TOTAL:</Text>
              <Text style={styles.totalValue}>
                R$ {(total / 100).toFixed(2).replace(".", ",")}
              </Text>
            </View>
            <TouchableOpacity onPress={handleCheckout} style={styles.button}>
              <Text style={styles.buttonText}>FINALIZAR PEDIDO</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
