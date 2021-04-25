import { HTMLChakraProps, VStack, Text, Button } from "@chakra-ui/react";

export const container: () => HTMLChakraProps<typeof VStack> = () => ({
  height: "100%",
  margin: "auto",
});

export const card: () => HTMLChakraProps<typeof VStack> = () => ({
  maxWidth: "400px",
  justifyContent: "center",
  alignContent: "center",
  margin: "0 25px",
  padding: "50px 30px",
  borderRadius: "16px",
  background: "red.50",
  boxShadow: "lg",
});

export const title: () => HTMLChakraProps<typeof Text> = () => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "red.600",
});

export const message: () => HTMLChakraProps<typeof Text> = () => ({
  fontSize: "1.3rem",
  textAlign: "center",
  color: "red.600",
});

export const aditionalText: () => HTMLChakraProps<typeof Text> = () => ({
  fontSize: "0.9rem",
  textAlign: "center",
  color: "gray.700",
});

export const actionButton: () => HTMLChakraProps<typeof Button> = () => ({
  marginTop: "25px !important",
  colorScheme: "teal",
});
