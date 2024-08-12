import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

export default function Header() {
  const navigation = useNavigation();

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
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image source={require("../../assets/shopping_icon.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
