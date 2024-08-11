import React, { useState } from "react";
import { Box, Image, Text, Button, Flex, Select } from "@chakra-ui/react";

export default function ProductsCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleAddToCart() {
    addToCart(product, quantity);
  }

  return (
    <Box
      color="black"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        boxSize="300px"
        objectFit="cover"
        width="auto"
        mb={4}
      />
      <Text>{product.name}</Text>
      <Text fontWeight="bold" mb={3}>
        R${product.price}
      </Text>
      <Flex alignItems="center">
        <Select
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          width="80px"
          height="44px"
          bg="#c62c4a"
          color="white"
          borderRadius={5}
          borderRightRadius={0}
        >
          {numbers.map((number) => (
            <option key={number} value={number} style={{ color: "black" }}>
              {number}
            </option>
          ))}
        </Select>

        <Button
          bg="#F8375D"
          color="white"
          height="42px"
          borderLeftRadius={0}
          _hover={{ bg: "#c62c4a" }}
          right={8}
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </Button>
      </Flex>
    </Box>
  );
}
