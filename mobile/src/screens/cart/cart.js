import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import CartList from "../../components/CartList/CartList";

export default function Cart() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <ScrollView>
        {/*TEST DEVELOPMENT*/}
        <CartList />
        <CartList />
        <CartList />
        <CartList />
        <CartList />
        <CartList />
        <CartList />
      </ScrollView>
    </View>
  );
}
