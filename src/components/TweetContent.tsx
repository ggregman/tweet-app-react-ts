import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import TweetContext from "../context/TweetContext";

type TweetContentProps = {
  index: number;
};

export const TweetContent = ({ index }: TweetContentProps) => {
  const { tweetList } = useContext(TweetContext);
  return <Box>{tweetList[index].content.text}</Box>;
};
