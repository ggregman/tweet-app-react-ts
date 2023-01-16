import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import "./App.css";
import { TweetContainer } from "./components/TweetContainer";
import { useHandleTweets } from "./hooks/useHandleTweets";
import { useTweets } from "./hooks/useTweets";

function App() {
  const { tweetList, setTweetList } = useTweets();
  const { handleAddTweet, handleDeleteTweet } = useHandleTweets({
    tweetList,
    setTweetList,
  });

  return (
    <Box className={`App-dark`}>
      <Heading as={"h1"} className="title">
        Today's Tweets
      </Heading>
      <Button onClick={handleAddTweet}>Add Tweet</Button>
      {tweetList && tweetList.length > 0 ? (
        <TweetContainer
          tweetList={tweetList}
          handleDeleteTweet={handleDeleteTweet}
        />
      ) : (
        <Heading as={"h2"} style={{ color: "white" }}>
          No tweets
        </Heading>
      )}
    </Box>
  );
}

export default App;
