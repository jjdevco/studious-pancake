import { graphqlWithAuth } from "./instance";

const getCommits = (
  owner: string,
  repo: string,
  branchName: string,
  cursor: string | null
) =>
  graphqlWithAuth(
    `query getCommits($owner: String!, $repo: String!, $branchName: String!, $cursor: String) {
      repository(owner: $owner, name: $repo) {
        ref(qualifiedName: $branchName) {
          target {
            ... on Commit {
              history(first: 10, after: $cursor) {
                pageInfo {
                  hasNextPage
                }
                edges {
                  node {
                    id
                    message
                    commitUrl
                    pushedDate
                    author {
                      name
                      avatarUrl
                    }
                  }
                  cursor
                }
              }
            }
          }
        }
      }
    }`,
    {
      owner,
      repo,
      branchName,
      cursor,
    }
  );

export default getCommits;
