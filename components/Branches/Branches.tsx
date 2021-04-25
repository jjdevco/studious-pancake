import * as React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import {
  useBranchesState,
  useBranchesDispatch,
  Types as BranchesActions,
} from "@/hooks/useBranches";
import * as stylesProps from "./styles";

function Branches() {
  const { branches } = useBranchesState();
  const dispatch = useBranchesDispatch();

  const handleChange = (index: any) =>
    dispatch({ type: BranchesActions.changeActive, data: branches[index] });

  return (
    <Tabs
      {...stylesProps.branches()}
      onChange={handleChange}
      defaultIndex={0}
      variant="enclosed"
      isFitted
      isLazy
    >
      <TabList>
        {branches.map((branch) => (
          <Tab key={branch.cursor}>{branch.name}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default Branches;
