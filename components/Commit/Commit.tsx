import * as React from "react";
import { chakra, Grid, HStack, Text, Avatar, Button } from "@chakra-ui/react";
import * as stylesProps from "./styles";

function Commit(props: CommitProps) {
  const { message, pushedDate, commitUrl, author } = props;

  return (
    <Grid {...stylesProps.container()}>
      <Text {...stylesProps.message()}>{message}</Text>
      <HStack {...stylesProps.author()}>
        <Avatar name={author.name} src={author.avatarUrl} size="xs" />
        <span>{author.name}</span>
      </HStack>

      <chakra.small {...stylesProps.date()}>
        &nbsp;- commited on {new Date(pushedDate).toLocaleString()}
      </chakra.small>

      <Button
        {...stylesProps.button()}
        href={commitUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Url
      </Button>
    </Grid>
  );
}

export default Commit;

// *** Types ***
type CommitProps = {
  message: string;
  commitUrl: string;
  pushedDate: string;
  author: {
    name: string;
    avatarUrl: string;
  };
};
