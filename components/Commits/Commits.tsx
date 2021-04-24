import * as React from "react";
import Commit from "@/components/Commit";
import { chakra } from "@chakra-ui/react";

function Commits() {
  return (
    <chakra.div gridArea="commits">
      <Commit />
    </chakra.div>
  );
}

export default Commits;
