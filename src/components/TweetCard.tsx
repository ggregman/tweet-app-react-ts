import { Box } from "@chakra-ui/react";
import { TweetContent } from "./TweetContent";
import { TweetDetails } from "./TweetDetails";
import { TweetImage } from "./TweetImage";
import { TweetUser } from "./TweetUser";

type TweetCardProps = {
  index: number;
};

export const TweetCard = ({ index }: TweetCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray"
      borderStyle="solid"
      p="1em"
      _hover={{ bg: "#101010" }}
    >
      <TweetImage index={index} />
      <Box p="1em" pb='0'>
        <TweetUser index={index} />
        <TweetContent index={index} />
        <TweetDetails index={index} />
      </Box>
    </Box>
  );
};
