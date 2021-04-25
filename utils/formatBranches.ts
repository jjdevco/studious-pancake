import type { GraphQlQueryResponseData } from "@octokit/graphql";

export default function formatBranches(array: []) {
  return array.map((el: GraphQlQueryResponseData) => ({
    name: el.name.split("/")?.[1] ?? el.name,
    cursor: el.target.history.pageInfo.endCursor,
    totalCommits: el.target.history.totalCount,
  }));
}
