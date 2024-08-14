import React, { useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { CartContext } from "../../context/CartContext";
import { styles } from "./styles";

export default function CartItem() {
  const { cartItems } = useContext(CartContext);

  return (
    <ScrollView>
      <View style={styles.cartContainer}>
        {cartItems.map((item) => (
          <>
            <View key={item.product.id} style={styles.itemContainer}>
              <Image
                source={{ uri: item.product.imageUrl }}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>{item.product.name}</Text>
                <Text style={styles.productPrice}>R${item.product.price}</Text>
              </View>
            </View>
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPrice}>
                R$ {item.product.price * item.quantity}
              </Text>
              <Text style={styles.totalQuantity}>{item.quantity}</Text>
            </View>
          </>
        ))}
      </View>
    </ScrollView>
  );
}
