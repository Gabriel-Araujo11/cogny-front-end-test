// components/AlertMessage/AlertMessage.js
import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
} from "@chakra-ui/react";

export default function AlertMessage({ status, title, description, onClose }) {
  return (
    <Box
      position="fixed"
      top="15%"
      left="50%"
      transform="translate(-50%, -30%)"
      maxW="450px"
      w="90%"
      zIndex={999}
      p={4}
      bg="#f5f5f5"
      borderRadius="md"
      boxShadow="2xl"
    >
      <Alert status={status} variant="subtle" borderRadius="md">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription display="block">{description}</AlertDescription>
        </Box>
        {onClose && (
          <Button
            variant="ghost"
            ml="auto"
            onClick={onClose}
            color="white"
            _hover={{ bg: "#c62c4a" }}
          >
            OK
          </Button>
        )}
      </Alert>
    </Box>
  );
}
