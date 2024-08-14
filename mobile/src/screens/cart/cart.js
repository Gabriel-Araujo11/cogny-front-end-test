import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import CartSummary from "../../components/CartSummary/CartSummary";

export default function Cart() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <ScrollView>
        {/*TEST DEVELOPMENT*/}
        <CartSummary />
      </ScrollView>
    </View>
  );
}
