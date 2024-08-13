import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import { CartContext } from "../../context/CartContext";
import ProductList from "../ProductList/ProductList";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);
  // const { addToCart } = useContext(CartContext);

  // function handleAddToCart() {
  //   addToCart(product, quantity);
  // }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://m.media-amazon.com/images/I/61Ru03cU+-L._AC_SY300_SX300_.jpg",
        }}
        overflow="hidden"
        style={styles.image}
      />
      <Text style={styles.productName}>Product.name</Text>
      <Text style={styles.productPrice}>Product.price</Text>

      <View style={styles.flexContainer}>
        <Picker
          selectValue={quantity}
          onValueChange={(item) => setQuantity(item)}
          style={styles.picker}
        >
          {numbers.map((number) => (
            <Picker.Item key={number} label={`${number}`} value={number} />
          ))}
        </Picker>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ProductList />
    </View>
  );
}
