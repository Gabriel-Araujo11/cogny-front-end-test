import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "./src/screens/products/products";
import Cart from "./src/screens/cart/cart";
import { CartProvider } from "./src/context/CartContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </CartProvider>
  );
}
