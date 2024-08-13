import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import ProductList from "../ProductList/ProductList";
import { CartContext } from "../../context/CartContext";
import { styles } from "./styles";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(quantity);
  };

  const handleSelectQuantity = (selectedQuantity) => {
    setQuantity(selectedQuantity);
    setPickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "product.imageUrl",
        }}
        overflow="hidden"
        style={styles.image}
      />
      <Text style={styles.productName}>product.name</Text>
      <Text style={styles.productPrice}>product.price</Text>

      <View style={styles.flexContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setPickerVisible(true)}
        >
          <Text style={styles.quantityText}>{quantity}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isPickerVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setPickerVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <FlatList
              data={numbers}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleSelectQuantity(item)}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <ProductList />
    </View>
  );
}
