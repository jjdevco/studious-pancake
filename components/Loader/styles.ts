import { HTMLChakraProps, VStack, Text } from "@chakra-ui/react";

export const container: () => HTMLChakraProps<typeof VStack> = () => ({
  gridArea: "commits",
  height: "100%",
  margin: "auto",
});

export const text: () => HTMLChakraProps<typeof Text> = () => ({
  maxWidth: "400px",
  padding: "10px 25px",
  fontSize: "1.5rem",
  textAlign: "center",
});
