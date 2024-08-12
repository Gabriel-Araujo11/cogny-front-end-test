import React from "react";
import { View } from "react-native";
import CartItem from "../../components/CartItem/CartItem";
import Header from "../../components/Header/Header";

export default function Cart() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <CartItem />
    </View>
  );
}
