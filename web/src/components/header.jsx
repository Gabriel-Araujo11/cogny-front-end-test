import { Box, Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="black" color="white" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <img src="/cognyshoeslogo.svg" alt="Logo" style={{ width: 50 }} />
          <Text fontSize="2xl" fontWeight="bold" ml={2}>
            COGNYSHOES
          </Text>
        </Flex>
        <Box textAlign="right">
          <Text fontSize="lg" fontWeight="bold">
            Meu carrinho
          </Text>
          <Text>3 itens</Text>
        </Box>
      </Flex>
    </Box>
  );
}
