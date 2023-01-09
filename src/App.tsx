import "./App.css";
import { TweetContainer } from "./components/TweetContainer";
import { useHandleTweets } from "./hooks/useHandleTweets";
import { useTweets } from "./hooks/useTweets";

function App() {
  const { tweetList, setTweetList } = useTweets();
  const { handleAddTweet, handleDelete, handleAddLikes } = useHandleTweets({
    tweetList,
    setTweetList,
  });

  return (
    <div className="App">
      <h1 className="title">Today's Tweets</h1>
      <button onClick={handleAddTweet}>Add Tweet</button>
      {tweetList && tweetList.length > 0 ? (
        <TweetContainer
          tweetList={tweetList}
          handleDelete={handleDelete}
          handleAddLikes={handleAddLikes}
        />
      ) : (
        <h2 style={{ color: "white" }}>No tweets</h2>
      )}
    </div>
  );
}

export default App;
