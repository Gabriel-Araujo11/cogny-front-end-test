import React, { useContext, useState } from "react";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { CartContext } from "../context/cartContext";
import AlertMessage from "../utils/Alert";
import { Link } from "react-router-dom";
import CartList from "./cartList";

export default function CartSummary({ total }) {
  const { resetCart } = useContext(CartContext);
  const [alert, setAlert] = useState(null);

  function handleCheckout() {
    if (total === 0) {
      setAlert({
        status: "warning",
        title: "Carrinho vazio",
        description: "Não existe nenhum produto no carrinho.",
      });
    } else {
      setAlert({
        status: "success",
        title: "Pedido finalizado!",
        description: "Seu pedido foi finalizado com sucesso!",
      });
      resetCart();
    }
  }

  return (
    <Box mt={4} p={4} borderWidth="1px" borderRadius="lg">
      {alert && (
        <AlertMessage
          status={alert.status}
          title={alert.title}
          description={alert.description}
          onClose={() => setAlert(null)}
        />
      )}
      {total === 0 ? (
        <Box>
          <Text mb={5}>O Carrinho está vazio.</Text>
          <Link to="/">
            <Button
              colorScheme="teal"
              onClick={handleCheckout}
              _hover={{ bg: "#c62c4a" }}
              bg="#F8375D"
            >
              VOLTAR
            </Button>
          </Link>
        </Box>
      ) : (
        <>
          <CartList />
          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Button
              colorScheme="teal"
              onClick={handleCheckout}
              _hover={{ bg: "#c62c4a" }}
              bg="#F8375D"
            >
              FINALIZAR PEDIDO
            </Button>
            <Flex alignItems="center">
              <Text color="gray.500" mr={2} fontSize="18px" fontWeight="bold">
                TOTAL:
              </Text>
              <Text
                fontWeight="bold"
                color="black"
                fontSize="30px"
                mb={4}
                mt={2}
              >
                R$ {total}
              </Text>
            </Flex>
          </Flex>
        </>
      )}
    </Box>
  );
}
