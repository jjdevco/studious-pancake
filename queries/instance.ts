import { graphql } from "@octokit/graphql";

const Token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: Token && `bearer ${Token}`,
  },
});

export { graphqlWithAuth };
