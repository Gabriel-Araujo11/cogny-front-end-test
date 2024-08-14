import React, { useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { CartContext } from "../../context/CartContext";
import { styles } from "./styles";

export default function CartItem() {
  const { cartItems } = useContext(CartContext);

  return (
    <ScrollView>
      <View style={styles.cartContainer}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCartText}>O carrinho está vazio.</Text>
        ) : (
          cartItems.map((item) => (
            <View key={item.product.id} style={styles.container}>
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.product.imageUrl }}
                  style={styles.image}
                  resizeMode="contain"
                />
                <View style={styles.textContainer}>
                  <Text style={styles.productName}>{item.product.name}</Text>
                  <Text style={styles.productPrice}>
                    R${item.product.price} x {item.quantity}
                  </Text>
                </View>
              </View>
              <Text style={styles.totalPrice}>
                R$ {item.product.price * item.quantity}
              </Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
