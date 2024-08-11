import React, { useContext } from "react";
import { Box, Divider, Grid, Text } from "@chakra-ui/react";
import { CartContext } from "../context/cartContext";
import CartItem from "./cartItem";

export default function CartList() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) return null;

  return (
    <Box>
      <Grid templateColumns="4fr 1fr 1fr" mb={4} textAlign="center">
        <Text fontWeight="bold" color="gray" alignItems="initial">
          PRODUTO
        </Text>
        <Text fontWeight="bold" color="gray">
          QTD
        </Text>
        <Text fontWeight="bold" color="gray">
          PREÇO
        </Text>
      </Grid>
      <Divider borderColor="gray.300" mb={4} />

      {cartItems.map((item) => (
        <CartItem key={item.product.id} item={item} />
      ))}
    </Box>
  );
}
