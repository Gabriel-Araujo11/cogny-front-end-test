import React, { useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { CartContext } from "../../context/CartContext";

export default function CartItem() {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <ScrollView>
      {cartItemsCount.map((item, index) => {
        <View key={index} style={styles.container}>
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.ImageUrl }}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>R$ {item.price}</Text>
            </View>
          </View>

          <Text style={styles.totalPrice}>R$ {item.price * item.quntity}</Text>
        </View>;
      })}
    </ScrollView>
  );
}
