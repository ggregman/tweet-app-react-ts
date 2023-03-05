import { Box } from "@chakra-ui/react";
import { TweetType } from "../types/tweetType";
import { TweetContent } from "./TweetContent";
import { TweetDetails } from "./TweetDetails";
import { TweetImage } from "./TweetImage";
import { TweetUser } from "./TweetUser";

type TweetCardProps = {
  tweet: TweetType;
};

export const TweetCard = ({ tweet }: TweetCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray"
      borderStyle="solid"
      p="1em"
      _hover={{ bg: "#101010" }}
    >
      <TweetImage tweet={tweet} />
      <Box p="1em" pb="0">
        <TweetUser tweet={tweet} />
        <TweetContent tweet={tweet} />
        <TweetDetails tweet={tweet} />
      </Box>
    </Box>
  );
};
