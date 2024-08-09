import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export default function CartItem({ item }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      mb={4}
    >
      <Image
        src={item.product.image}
        alt={item.product.name}
        boxSize="100px"
        objectFit="cover"
      />
      <Box ml={4}>
        <Text fontWeight="bold">{item.product.name}</Text>
        <Text>Quantidade: {item.quantity}</Text>
        <Text>Preço: ${item.product.price * item.quantity}</Text>
      </Box>
    </Box>
  );
}
