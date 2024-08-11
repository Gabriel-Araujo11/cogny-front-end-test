import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "./src/screens/products/products";
import Cart from "./src/screens/cart/cart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Product">
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
