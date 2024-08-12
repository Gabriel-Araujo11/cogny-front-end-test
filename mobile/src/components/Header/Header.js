import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { CartContext } from "../../context/CartContext";

export default function Header() {
  const navigation = useNavigation();
  const { cartItemsCount } = useContext(CartContext);

  function handleToCart() {
    navigation.navigate("Cart");
  }

  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor="black" />
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>COGNYSHOES</Text>
            <Image
              source={require("../../assets/cognyshoeslogo.png")}
              style={styles.logoImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.cartContainer}>
          <TouchableOpacity onPress={handleToCart}>
            <Image source={require("../../assets/shopping_icon.png")} />
            {cartItemsCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartItemsCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
