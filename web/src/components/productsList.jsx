import React, { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProductsCard from "./productsCard";

const products = [
  { id: 1, name: "shoes 1", price: 100, image: "/path/to/image1.jpg" },
  { id: 2, name: "shoes 2", price: 120, image: "/path/to/image2.jpg" },
  { id: 3, name: "shoes 3", price: 150, image: "/path/to/image3.jpg" },
  { id: 4, name: "shoes 4", price: 130, image: "/path/to/image4.jpg" },
  { id: 5, name: "shoes 5", price: 110, image: "/path/to/image5.jpg" },
  { id: 6, name: "shoes 6", price: 140, image: "/path/to/image6.jpg" },
  { id: 7, name: "shoes 7", price: 1410, image: "/path/to/image7.jpg" },
  { id: 8, name: "shoes 8", price: 140, image: "/path/to/image8.jpg" },
  { id: 9, name: "shoes 9", price: 20, image: "/path/to/image9.jpg" },
  { id: 10, name: "shoes 10", price: 1340, image: "/path/to/image10.jpg" },
  { id: 11, name: "shoes 11", price: 1240, image: "/path/to/image11.jpg" },
  { id: 12, name: "shoes 12", price: 143, image: "/path/to/image12.jpg" },
];

export default function ProductList({ addToCart }) {
  const [quantity, setQuantity] = useState(1);
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
