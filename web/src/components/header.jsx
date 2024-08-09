import { Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

export default function Header() {
  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <Box bg="black" color="white" p={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="970px"
        margin="0 auto"
        marginTop={5}
      >
        <Link to="/">
          <Flex alignItems="center">
            <img src="/cognyshoeslogo.svg" alt="Logo" style={{ width: 50 }} />
            <Text fontSize="2xl" fontWeight="bold" ml={2}>
              COGNYSHOES
            </Text>
          </Flex>
        </Link>
        <Box textAlign="right">
          <Link to="/cart">
            <Text fontSize="lg" fontWeight="bold">
              Meu carrinho
            </Text>
          </Link>
          <Text>{totalQuantity} itens</Text>
        </Box>
      </Flex>
    </Box>
  );
}
