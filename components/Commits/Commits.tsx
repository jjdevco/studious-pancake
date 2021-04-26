import * as React from "react";
import ErrorCard from "@/components/ErrorCard";
import Commit from "@/components/Commit";
import { chakra, Skeleton, Stack } from "@chakra-ui/react";
import { useScroll } from "@/hooks/useScroll";
import { useBranchesState } from "@/hooks/useBranches";
import {
  useAsyncFetch,
  asyncReducer,
  ReducerProps,
} from "@/hooks/useAsyncFetch";
import getCommits from "@/queries/getCommits";
import formatCommitsResponse from "@/utils/formatCommitsResponse";

const initialState = {
  status: "idle",
  data: { cursor: null, hasMore: true },
};

const reducer: ReducerProps = function commitsReducer(state, action) {
  if (action.type === "pending") {
    return { ...state, status: "pending", error: null };
  }

  if (action.type === "resolved") {
    return {
      status: "resolved",
      data: formatCommitsResponse(action.data),
      error: null,
    };
  }

  if (action.type === "reset") {
    return initialState;
  }

  return asyncReducer(state, action);
};

function Commits() {
  const containerRef = React.useRef<HTMLDivElement>(null!);
  const scrollValues = useScroll(containerRef);

  const { activeBranch } = useBranchesState();
  const { status, data, error, run, dispatch } = useAsyncFetch(
    initialState,
    reducer
  );

  const [commitsList, setCommitsList] = React.useState(Array(0).fill(null));

  React.useEffect(() => {
    if (activeBranch?.name) {
      const { offsetHeight, scrollTop, scrollHeight } = scrollValues;

      if (
        status === "idle" ||
        (status === "resolved" &&
          data.hasMore &&
          scrollHeight !== offsetHeight &&
          scrollHeight - scrollTop - offsetHeight <= offsetHeight * 0.2)
      ) {
        run(
          getCommits(
            "jjdevco",
            "studious-pancake",
            activeBranch.name,
            data.cursor
          )
        );
      }
    }
  }, [activeBranch, data, status, scrollValues, containerRef.current]);

  React.useEffect(() => {
    setCommitsList([]);
    dispatch({ type: "reset" });
  }, [activeBranch]);

  React.useLayoutEffect(() => {
    data?.commits && setCommitsList((cList) => cList.concat(data.commits));
  }, [data]);

  if (status === "rejected") {
    return (
      <ErrorCard
        gridArea="commits"
        py="20px"
        message={error?.message ?? "Something went wrong :-("}
        aditionalText={
          error?.message === "This endpoint requires you to be authenticated."
            ? `It appears to be that you forget the .env var "NEXT_PUBLIC_GITHUB_AUTH_TOKEN". Please read the Readme for more info.`
            : undefined
        }
      />
    );
  }

  return (
    <chakra.div
      ref={containerRef}
      gridArea="commits"
      height="100%"
      maxHeight="inherit"
      overflow="hidden scroll"
      padding="20px 30px"
    >
      {commitsList.map(({ id, ...rest }) => (
        <Commit key={id} {...rest} />
      ))}

      {(status === "idle" || status === "pending") && (
        <Stack spacing="20px">
          {Array(Math.floor(scrollValues.offsetHeight / 60))
            .fill(null)
            .map((_el, idx) => (
              <Skeleton key={idx} height="50px" borderRadius="6px" />
            ))}
        </Stack>
      )}
    </chakra.div>
  );
}

export default Commits;
