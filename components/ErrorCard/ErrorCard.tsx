import * as React from "react";
import { Center, VStack, Text, Button, StackProps } from "@chakra-ui/react";
import * as stylesProps from "./styles";

function ErrorCard(props: ErrorCardProps) {
  const {
    message,
    aditionalText,
    recoveryAction = () => window.location.reload(),
    ...othersProps
  } = props;

  return (
    <Center {...stylesProps.container()} {...othersProps}>
      <VStack {...stylesProps.card()}>
        <Text {...stylesProps.title()}>Oh no!</Text>
        <Text {...stylesProps.message()}>{message}</Text>
        {aditionalText && (
          <Text {...stylesProps.aditionalText()}>{aditionalText}</Text>
        )}
        <Button {...stylesProps.actionButton()} onClick={recoveryAction}>
          Try Again
        </Button>
      </VStack>
    </Center>
  );
}

export default ErrorCard;

/// *** Types ***
type ErrorCardProps = {
  message: string;
  aditionalText?: string;
  recoveryAction?: () => void;
} & StackProps;
