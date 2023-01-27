import { createContext } from "react";
import { TweetType } from "../types/tweetType";

type TweetContextType = {
  tweetList: TweetType[];
  setTweetList: (tweetList: TweetType[]) => void;
  handleDeleteTweet: (index: number) => void;
};
const TweetContext = createContext<TweetContextType>({
  tweetList: [],
  setTweetList: () => {},
  handleDeleteTweet: () => {}
});

export default TweetContext;
