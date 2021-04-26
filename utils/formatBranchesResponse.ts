import type { GraphQlQueryResponseData } from "@octokit/graphql";

export default function formatBranchesResponse(array: []) {
  return array.map((el: GraphQlQueryResponseData) => ({
    name: el.name.split("/")?.[1] ?? el.name,
  }));
}
