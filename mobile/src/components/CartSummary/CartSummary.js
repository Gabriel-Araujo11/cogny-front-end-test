import React, { useContext } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { CartContext } from "../../context/CartContext";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import CartItem from "../../components/CartItem/CartItem";

export default function CartSummary({ total }) {
  const { resetCart } = useContext(CartContext);
  const navigation = useNavigation();

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
      {total === 0 ? (
        <View>
          <Text style={styles.emptyCartText}>O Carrinho está vazio.</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={[styles.button, styles.backButton]}>
              <Text style={styles.buttonText}>VOLTAR</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <CartItem />
          <View style={styles.footer}>
            <TouchableOpacity>
              <View style={[styles.button, styles.checkoutButton]}>
                <Text style={styles.buttonText} onPress={handleCheckout}>
                  FINALIZAR PEDIDO
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>TOTAL:</Text>
              <Text style={styles.totalValue}>R$ {total}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
