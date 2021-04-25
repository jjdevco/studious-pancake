import * as React from "react";
import {
  Center,
  VStack,
  CircularProgress,
  Text,
  CenterProps,
} from "@chakra-ui/react";
import * as stylesProps from "./styles";

function Loader(props: LoaderProps) {
  const { text = "Loading...", showText = true, ...othersProps } = props;

  return (
    <Center {...stylesProps.container()} {...othersProps}>
      <VStack>
        <CircularProgress size={24} isIndeterminate />
        {showText && <Text {...stylesProps.text()}>{text}</Text>}
      </VStack>
    </Center>
  );
}

export default Loader;

// *** Types ***
type LoaderProps = { text?: string; showText?: boolean } & CenterProps;
