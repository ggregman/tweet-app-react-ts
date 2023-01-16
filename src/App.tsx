import { useState } from "react";
import "./App.css";
import { TweetContainer } from "./components/TweetContainer";
import { ThemeContext } from "./context/ThemeContext";
import { useHandleTweets } from "./hooks/useHandleTweets";
import { useTweets } from "./hooks/useTweets";

function App() {
  const { tweetList, setTweetList } = useTweets();
  const { handleAddTweet, handleDeleteTweet } = useHandleTweets({
    tweetList,
    setTweetList,
  });

  const [theme, setTheme] = useState(true);

  const handleToggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App-${theme ? "dark" : "light"}`}>
        <button onClick={handleToggleTheme}>Toggle dark mode</button>
        <h1 className="title">Today's Tweets</h1>
        <button onClick={handleAddTweet}>Add Tweet</button>
        {tweetList && tweetList.length > 0 ? (
          <TweetContainer tweetList={tweetList} handleDeleteTweet={handleDeleteTweet} />
        ) : (
          <h2 style={{ color: "white" }}>No tweets</h2>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
