import type { GraphQlQueryResponseData } from "@octokit/graphql";

export default function formatCommitsResponse(data: GraphQlQueryResponseData) {
  if (!data.repository.ref) return { cursor: null, hasMore: false };

  const history = data.repository.ref.target.history;

  const commits = history.edges.map((commit: GraphQlQueryResponseData) => ({
    ...commit.node,
  }));

  const cursor = history.edges[history.edges.length - 1].cursor;
  const hasMore = history.pageInfo.hasNextPage;

  return { commits, cursor, hasMore };
}
