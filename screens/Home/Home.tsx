import * as React from "react";
import Branches from "@/components/Branches";
import Commits from "@/components/Commits";
import { chakra, Grid, Text, HStack } from "@chakra-ui/react";
import * as stylesProps from "./styles";

function Home() {
  return (
    <Grid {...stylesProps.container()}>
      <HStack {...stylesProps.navbar()}>
        <chakra.a
          {...stylesProps.link()}
          href="https://github.com/jjdevco/studious-pancake"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </chakra.a>
      </HStack>

      <Text {...stylesProps.title()}>Repossitory Title</Text>

      <Text {...stylesProps.description()}>Repossitory Description</Text>

      <Branches />

      <Commits />

      <Text {...stylesProps.footer()}>
        <label>Author:&nbsp;</label>
        <span>Jose Jimenez&nbsp;</span>
        <label>GitHub:&nbsp;</label>
        <chakra.a
          {...stylesProps.link()}
          href="https://github.com/jjdevco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/jjdevco/
        </chakra.a>
      </Text>
    </Grid>
  );
}

export default Home;
