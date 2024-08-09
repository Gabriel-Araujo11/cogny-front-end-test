import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  Flex,
} from "@chakra-ui/react";
import { quantitySchema } from "../validation/quatityValidation";

export default function ProductsCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  function handleAddToCart() {
    const result = quantitySchema.safeParse(quantity);
    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError("");
      addToCart(product, quantity);
    }
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
        src={product.image}
        alt={product.name}
        boxSize="150px"
        objectFit="cover"
        mb={4}
      />
      <Text>{product.name}</Text>
      <Text fontWeight="bold" mb={3}>
        R${product.price}
      </Text>
      <Flex alignItems="center">
        <NumberInput
          value={quantity}
          onChange={(value) => setQuantity(value)}
          min={1}
          max={10}
          width="53px"
          height="42px"
          borderRightRadius={0}
          bg="#c62c4a"
          borderRadius={5}
        >
          <NumberInputField
            textAlign="center"
            color="white"
            paddingX={2}
            borderColor="#c62c4a"
          />
        </NumberInput>

        <Button
          bg="#F8375D"
          color="white"
          height="42px"
          borderLeftRadius={0}
          _hover={{ bg: "#c62c4a" }}
          right={1}
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </Button>
      </Flex>
    </Box>
  );
}
