import { Center, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import TweetContext from "../context/TweetContext";
import { TweetCard } from "./TweetCard";

export const TweetContainer = () => {
  const { tweetList } = useContext(TweetContext);

  return (
    <Center>
      <VStack maxW="30em" m="2em" spacing="0">
        {tweetList.map((_, index) => {
          return <TweetCard key={index} index={index} />;
        })}
      </VStack>
    </Center>
  );
};
