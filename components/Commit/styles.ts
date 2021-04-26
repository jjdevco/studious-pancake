import {
  HTMLChakraProps,
  Grid,
  Text,
  HStack,
  Button,
  chakra,
} from "@chakra-ui/react";

export const container: () => HTMLChakraProps<typeof Grid> = () => ({
  minHeight: "50px",
  width: "100%",
  gridTemplateAreas: [
    `"message" "author" "date" "button"`,
    `"message message button" "author date button"`,
  ],
  gridTemplateColumns: ["1fr", "auto 1fr auto"],
  gridTemplateRows: ["repeat(4, 1fr)", "repeat(2, 1fr)"],
  marginBottom: "30px",
  borderRadius: "6px",
  border: "2px solid",
  borderColor: "cyan.400",
  padding: "10px 20px",
  background: "cyan.100",
  boxShadow: "lg",
  transition: "background 150ms ease-in-out",
  _hover: {
    background: "orange.100",
  },
});

export const message: () => HTMLChakraProps<typeof Text> = () => ({
  gridArea: "message",
  fontWeight: "bold",
});

export const author: () => HTMLChakraProps<typeof HStack> = () => ({
  gridArea: "author",
});

export const date: () => HTMLChakraProps<typeof chakra.caption> = () => ({
  gridArea: "date",
  fontSize: "0.85rem",
  lineHeight: "1.4rem",
  fontWeight: "bold",
  textAlign: "left",
  color: "gray.500",
});

export const button: () => HTMLChakraProps<typeof Button> = () => ({
  gridArea: "button",
  margin: "auto",
  colorScheme: "blue",
  as: "a",
});
