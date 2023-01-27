import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Center, Spinner } from "@chakra-ui/react";
import { BiRefresh } from "react-icons/bi";
import "./App.css";
import { TweetContainer } from "./components/TweetContainer";
import TweetContext from "./context/TweetContext";
import { useHandleTweets } from "./hooks/useHandleTweets";
import { useTweets } from "./hooks/useTweets";

function App() {
  const {
    tweetList,
    setTweetList,
    isLoadingTweets,
    setIsLoadingTweets,
    error,
    fetchData,
  } = useTweets();
  const { handleDeleteTweet, handleAddTweet, isLoadingPostRequest } =
    useHandleTweets({
      tweetList,
      setTweetList,
      setIsLoadingTweets,
    });

  return (
    <TweetContext.Provider
      value={{ tweetList, setTweetList, handleDeleteTweet }}
    >
      <Center>
        <Heading as={"h1"}>Today's Tweets</Heading>
        <Button
          rounded="100"
          p="0.5em"
          _hover={{ cursor: "pointer", bg: "#1DA1F2", color: "#F5F8FA" }}
          color="#1DA1F2"
          ml="1em"
          onClick={fetchData}
        >
          <BiRefresh size="1.5em" />
        </Button>
      </Center>
      <Center>
        <Button
          rounded="100"
          p="0.5em"
          _hover={{ cursor: "pointer", bg: "#1DA1F2", color: "#F5F8FA" }}
          color="#1DA1F2"
          ml="1em"
          onClick={handleAddTweet}
          fontWeight="semibold"
        >
          Add Tweet
        </Button>
      </Center>
      {(isLoadingTweets || isLoadingPostRequest) && !error ? (
        <Center>
          <Spinner color="#1DA1F2" w="3em" h="3em" />
        </Center>
      ) : tweetList && tweetList.length > 0 ? (
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
