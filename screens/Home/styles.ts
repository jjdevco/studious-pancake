import {
  Grid,
  Text,
  HTMLChakraProps,
  useTheme,
  chakra,
  HStack,
  Skeleton,
} from "@chakra-ui/react";

export const container: () => HTMLChakraProps<typeof Grid> = () => ({
  width: "100vw",
  height: "100vh",
  gridTemplateAreas: `"navbar" "title" "description" "timestamps" "branches" "commits" "footer"`,
  gridTemplateRows: "auto auto auto auto auto 1fr auto",
  gridAutoColumns: "1fr",
});

export const navbar: () => HTMLChakraProps<typeof HStack> = () => ({
  gridArea: "navbar",
  justifyContent: "flex-end",
  padding: "10px 30px 20px",
});

export const titleSkeleton: () => HTMLChakraProps<typeof Skeleton> = () => ({
  gridArea: "title",
  height: "32px",
  maxWidth: "400px",
  width: "100%",
  margin: "10px auto",
});

export const title: () => HTMLChakraProps<typeof Text> = () => ({
  gridArea: "title",
  width: "inherit",
  textAlign: "center",
  fontSize: "2.5rem",
  as: "h1",
});

export const descriptionSkeleton: () => HTMLChakraProps<
  typeof Skeleton
> = () => ({
  gridArea: "description",
  height: "24px",
  maxWidth: "250px",
  width: "100%",
  margin: "auto",
});

export const description: () => HTMLChakraProps<typeof Text> = () => ({
  gridArea: "description",
  width: "inherit",
  textAlign: "center",
  fontSize: "1.4rem",
  padding: "5px 35px 10px",
  as: "h2",
});

export const timestamps: () => HTMLChakraProps<typeof Text> = () => ({
  gridArea: "timestamps",
  width: "inherit",
  textAlign: "center",
  fontSize: "1.2rem",
  padding: "5px 35px 10px",
});

export const footer: () => HTMLChakraProps<typeof Text> = () => {
  const { colors } = useTheme();

  return {
    gridArea: "footer",
    textAlign: "center",
    padding: "10px 20px",
    color: "gray.700",
    css: {
      label: {
        fontWeight: "bold",
      },
      span: {
        color: colors.blue[700],
        marginRight: "20px",
      },
    },
  };
};

export const link: () => HTMLChakraProps<typeof chakra.a> = () => {
  const { colors } = useTheme();

  return {
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: colors.blue[400],
    cursor: "pointer",
    transition: "all 200ms",
    _hover: {
      color: colors.blue[600],
      textDecoration: "underline",
    },
  };
};
