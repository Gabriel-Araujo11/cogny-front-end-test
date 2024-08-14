import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ProductsCard from "../../components/ProductCard/ProductCard";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../services/firebase";
import { styles } from "./styles";

export default function ProductList({ addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsCol = collection(db, "products");
      const productSnapshot = await getDocs(productsCol);
      const productList = productSnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setProducts(productList);
    }
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      {products.map((product) => {
        return (
          <ProductsCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        );
      })}
    </View>
  );
}
