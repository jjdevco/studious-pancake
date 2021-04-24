import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { debugContextDevtool } from "react-context-devtool";
import type { AppProps } from "next/app";
import "focus-visible/dist/focus-visible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

//React Context devtools initialization
if (!(typeof window === "undefined") && window._REACT_CONTEXT_DEVTOOL) {
  const container = document.getElementById("__next");
  debugContextDevtool(container, {
    disable: process.env.NODE_ENV === "production",
  });
}

export default MyApp;
