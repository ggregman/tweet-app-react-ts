import { Button, Center, Heading, Spinner, VStack } from "@chakra-ui/react";
import { BiRefresh } from "react-icons/bi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTweetList } from "../api/getTweetList";
import { postTweet } from "../api/postTweet";
import { TweetType } from "../types/tweetType";
import { TweetCard } from "./TweetCard";

export const TweetContainer = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery(
    "tweetList",
    getTweetList
  );

  const addTweet = useMutation(postTweet, {
    onSuccess: () => {
      queryClient.invalidateQueries("tweetList");
    },
  });

  if (isLoading)
    return (
      <Center>
        <Spinner w="5em" h="5em" />
      </Center>
    );

  if (isError)
    return (
      <Center>
        <Heading>Si è verificato un errore</Heading>
      </Center>
    );

  return (
    <>
      <Center>
        <Heading as={"h1"}>Today's Tweets</Heading>
        <Button
          rounded="100"
          p="0.5em"
          _hover={{ cursor: "pointer", bg: "#1DA1F2", color: "#F5F8FA" }}
          color="#1DA1F2"
          ml="1em"
          onClick={() => addTweet.mutate()}
        >
          <BiRefresh size="1.5em" />
        </Button>
      </Center>
      <Center>
        <VStack maxW="30em" m="2em" spacing="0">
          {data &&
            data.map((tweet: TweetType, index: number) => {
              return <TweetCard key={index} tweet={tweet} />;
            })}
        </VStack>
      </Center>
    </>
  );
};
