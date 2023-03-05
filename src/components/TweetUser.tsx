import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { TweetType } from "../types/tweetType";

type TweetUserProps = {
  tweet: TweetType;
};

export const TweetUser = ({ tweet }: TweetUserProps) => {
  return (
    <HStack mb="1em">
      <Image
        maxW="4em"
        rounded="100%"
        src={tweet.user.avatarUrl}
        alt={tweet.user.username}
      />
      <VStack placeItems="start">
        <Heading as={"h3"} style={{ margin: 0 }}>
          {tweet.user.name} {tweet.user.surname}
        </Heading>
        <Text color="#4a4e51">@{tweet.user.username}</Text>
      </VStack>
    </HStack>
  );
};
