import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { CartContext } from "../../context/CartContext";

export default function Header() {
  const navigation = useNavigation();
  const { resetCart, cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  function handleToCart() {
    navigation.navigate("Cart");
  }

  function handleToProducts() {
    navigation.navigate("Products");
    resetCart();
  }

  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor="black" />
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={handleToProducts}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>COGNYSHOES</Text>
            <Image
              source={require("../../assets/cognyshoes_logo.png")}
              style={styles.logoImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.cartContainer}>
          <TouchableOpacity onPress={handleToCart}>
            <Image source={require("../../assets/shopping_icon.png")} />
            {totalQuantity > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{totalQuantity}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
