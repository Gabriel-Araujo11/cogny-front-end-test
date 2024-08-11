import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProductsCard from "./productsCard";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../service/firebase";

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
    <SimpleGrid columns={3} spacing={5}>
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
    </SimpleGrid>
  );
}
