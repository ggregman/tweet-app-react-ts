import { useContext } from "react";
import { TweetContext } from "../context/TweetContext";
import { Box } from "@chakra-ui/react";

export const TweetContent = () => {
  const tweetContext = useContext(TweetContext);
  return <Box>{tweetContext.content.text}</Box>;
};
