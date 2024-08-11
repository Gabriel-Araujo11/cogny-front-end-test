import React, { useContext } from "react";
import { Box, Text, Image, Grid, GridItem, Select } from "@chakra-ui/react";
import { CartContext } from "../context/cartContext";

export default function CartItem({ item }) {
  const { addToCart } = useContext(CartContext);

  function handleQuantityChange(e) {
    const newQuantity = parseInt(e.target.value, 10);
    addToCart(item.product, newQuantity);
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" mb={4} p={4}>
      <Grid
        templateColumns="4fr 1fr 1fr"
        alignItems="center"
        textAlign="center"
      >
        <GridItem display="flex" alignItems="center">
          <Image
            src={item.product.imageUrl}
            alt={item.product.name}
            boxSize="100px"
            objectFit="contain"
          />
          <Box ml={4}>
            <Text fontWeight="bold" fontSize="14px" textAlign="initial">
              {item.product.name}
            </Text>
            <Text fontWeight="bold" fontSize="18px" textAlign="initial">
              R${item.product.price}
            </Text>
          </Box>
        </GridItem>
        <Select
          value={item.quantity}
          onChange={handleQuantityChange}
          width="70px"
          textAlign="center"
          mx="auto"
        >
          {[...Array(10).keys()].map((index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </Select>

        <Text fontWeight="bold" fontSize="18px">
          R${item.product.price * item.quantity}
        </Text>
      </Grid>
    </Box>
  );
}
