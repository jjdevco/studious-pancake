import * as React from "react";
import Loader from "@/components/Loader";
import ErrorCard from "@/components/ErrorCard";
import { chakra, Grid, Text, HStack, Skeleton } from "@chakra-ui/react";
import { useAsyncFetch } from "@/hooks/useAsyncFetch";
import {
  useBranchesDispatch,
  Types as BranchesActions,
} from "@/hooks/useBranches";
import getRepository from "@/queries/getRepository";
import formatBranches from "@/utils/formatBranches";
import * as stylesProps from "./styles";

import Branches from "@/components/Branches";
import Commits from "@/components/Commits";

const initialState: IInitialState = {
  status: "idle",
};

function Home() {
  const { status, data, error, run } = useAsyncFetch(initialState);
  const branchesDispatch = useBranchesDispatch();

  const { name, description, url, createdAt, updatedAt } =
    data?.repository ?? {};

  React.useEffect(() => {
    run(getRepository("jjdevco", "studious-pancake"));
  }, []);

  React.useEffect(() => {
    if (data?.repository.refs.nodes) {
      branchesDispatch({
        type: BranchesActions.setBranches,
        branches: formatBranches(data.repository.refs.nodes),
      });
    }
  }, [data]);

  return (
    <Grid {...stylesProps.container()}>
      <HStack {...stylesProps.navbar()}>
        <chakra.a
          {...stylesProps.link()}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </chakra.a>
      </HStack>

      {status === "resolved" ? (
        <>
          <Text {...stylesProps.title()}>{name}</Text>
          <Text {...stylesProps.description()}>{description}</Text>
          <Text {...stylesProps.timestamps()}>
            First commit: {new Date(createdAt).toLocaleString()} - Last commit:{" "}
            {new Date(updatedAt).toLocaleString()}
          </Text>
        </>
      ) : (
        <>
          <Skeleton {...stylesProps.titleSkeleton()} />
          <Skeleton {...stylesProps.descriptionSkeleton()} />
        </>
      )}

      {(status === "idle" || status === "pending") && (
        <Loader text="Booting up..." />
      )}

      {status === "resolved" && (
        <>
          <Branches />
          <Commits />
        </>
      )}

      {error && (
        <ErrorCard
          gridArea="commits"
          message={error?.message ?? "Something went wrong :-("}
          aditionalText={
            error?.message === "This endpoint requires you to be authenticated."
              ? `It appears to be that you forget the .env var "NEXT_PUBLIC_GITHUB_AUTH_TOKEN". Please read the Readme for more info.`
              : undefined
          }
        />
      )}

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

// *** Types ***
interface IInitialState {
  status: string;
}
