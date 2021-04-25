import { graphqlWithAuth } from "./instance";

const getRepository = (owner: string, repo: string) =>
  graphqlWithAuth(
    `query getRepository($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        name
        description
        url
        createdAt
        updatedAt
        refs(first: 20, refPrefix: "refs/") {
          nodes {
            name
            target {
              ... on Commit {
                history {
                  pageInfo {
                    endCursor
                  }
                  totalCount
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
    }
  );

export default getRepository;
