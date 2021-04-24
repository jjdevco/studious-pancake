import * as React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import * as stylesProps from "./styles";

function Branches() {
  const [activeBranch, setActiveBranch] = React.useState(1);

  return (
    <Tabs
      {...stylesProps.branches()}
      onChange={(index) => setActiveBranch(index)}
      defaultIndex={activeBranch}
      variant="enclosed"
      isFitted
    >
      <TabList>
        <Tab>Master</Tab>
        <Tab>Develop</Tab>
        <Tab>Test</Tab>
      </TabList>
    </Tabs>
  );
}

export default Branches;
