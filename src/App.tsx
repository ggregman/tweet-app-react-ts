import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { getTweetList } from "./api/getTweetList";
import "./App.css";
import { TweetContainer } from "./components/TweetContainer";
import TweetContext from "./context/TweetContext";
import { useHandleTweets } from "./hooks/useHandleTweets";
import { TweetType } from "./types/tweetType";

function App() {
  const [tweetList, setTweetList] = useState<TweetType[]>(getTweetList());

  const { handleAddTweet } = useHandleTweets({ tweetList, setTweetList });

  return (
    <TweetContext.Provider value={{ tweetList, setTweetList }}>
      <Center>
        <Heading as={"h1"}>Today's Tweets</Heading>
        <Button
          rounded="100"
          p="0.5em"
          _hover={{ cursor: "pointer", bg: "#1DA1F2", color: "#F5F8FA" }}
          color="#1DA1F2"
          ml="1em"
          onClick={handleAddTweet}
        >
          <BiRefresh size="1.5em" />
        </Button>
      </Center>
      {tweetList && tweetList.length > 0 ? (
        <TweetContainer />
      ) : (
        <Center>
          <Heading as={"h2"} style={{ color: "white" }}>
            No tweets
          </Heading>
        </Center>
      )}
    </TweetContext.Provider>
  );
}

export default App;
