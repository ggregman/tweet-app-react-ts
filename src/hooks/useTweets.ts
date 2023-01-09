import { useCallback, useState } from "react";
import { getTweetList } from "../api/getTweetList";
import { TweetType } from "../types/tweetType";

export const useTweets = () => {
  const [tweetList, setTweetList] = useState<TweetType[]>(useCallback(getTweetList, []));

  return { tweetList, setTweetList };
};
