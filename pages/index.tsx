import * as React from "react";
import Home from "@/screens/Home";
import { BranchesProvider } from "@/hooks/useBranches";

const IndexPage = () => (
  <BranchesProvider>
    <Home />
  </BranchesProvider>
);

export default IndexPage;
