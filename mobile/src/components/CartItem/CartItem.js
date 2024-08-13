import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./styles";

export default function CartItem() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: "product.imageUrl",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.productName}>item.product.name</Text>
          <Text style={styles.productPrice}>R$ preço</Text>
        </View>
      </View>

      <Text style={styles.totalPrice}>R$ Preço somado</Text>
    </View>
  );
}
