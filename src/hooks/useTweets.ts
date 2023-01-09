import { useCallback, useState } from "react";
import { getTweetList } from "../api/getTweetList";

export const useTweets = () => {
  const [tweetList, setTweetList] = useState(useCallback(getTweetList, []));

  return { tweetList, setTweetList };
};
