import { createContext } from "react";
import { TweetType } from "../types/tweetType";

type TweetContextType = {
  tweetList: TweetType[];
  setTweetList: (tweetList: TweetType[]) => void;
};
const TweetContext = createContext<TweetContextType>({
  tweetList: [],
  setTweetList: () => {},
});

export default TweetContext;
