import React, { useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ id, imageUrl, name, price }) {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <ScrollView>
      <View key={id} style={styles.container}>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>R${price} </Text>
          </View>
        </View>

        <Text style={styles.totalPrice}>R$ {price}</Text>
      </View>
    </ScrollView>
  );
}
