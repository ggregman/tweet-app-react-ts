import { Box } from "@chakra-ui/react";
import { TweetType } from "../types/tweetType";

type TweetContentProps = {
  tweet: TweetType;
};

export const TweetContent = ({ tweet }: TweetContentProps) => {
  return <Box>{tweet.content.text}</Box>;
};
