import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function ProductsCard({
  product,
  addToCart,
  quantity,
  setQuantity,
}) {
  return (
    <Box
      color="black"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
    >
      <Image
        src={product.image}
        alt={product.name}
        boxSize="150px"
        objectFit="cover"
        mb={4}
      />
      <Text fontWeight="bold">{product.name}</Text>
      <Text>R${product.price}</Text>
      <NumberInput
        bg="#c62c4a"
        value={quantity}
        onChange={(value) => setQuantity(value)}
        min={1}
        max={10}
        mb={4}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        bg="#F8375D"
        color="white"
        colorScheme="teal"
        onClick={() => addToCart(product, quantity)}
        _hover={{ bg: "#c62c4a" }}
      >
        Adicionar ao carrinho
      </Button>
    </Box>
  );
}
