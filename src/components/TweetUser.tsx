import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import TweetContext from "../context/TweetContext";

type TweetUserProps = {
  index: number;
};

export const TweetUser = ({ index }: TweetUserProps) => {
  const { tweetList } = useContext(TweetContext);
  return (
    <HStack mb="1em">
      <Image
        maxW="4em"
        rounded="100%"
        src={tweetList[index].user.avatarUrl}
        alt={tweetList[index].user.username}
      />
      <VStack placeItems="start">
        <Heading as={"h3"} style={{ margin: 0 }}>
          {tweetList[index].user.name} {tweetList[index].user.surname}
        </Heading>
        <Text color="#4a4e51">@{tweetList[index].user.username}</Text>
      </VStack>
    </HStack>
  );
};
