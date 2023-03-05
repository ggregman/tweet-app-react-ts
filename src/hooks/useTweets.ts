import { useCallback, useEffect, useState } from "react";
import { getTweetList } from "../api/getTweetList";
import { TweetType } from "../types/tweetType";

export const useTweets = () => {
  const [tweetList, setTweetList] = useState<TweetType[]>([]);
  const [isLoadingTweets, setIsLoadingTweets] = useState(false);
  const [error, setError] = useState<string>();

  const fetchData = useCallback(async () => {
    setIsLoadingTweets(true);

    try {
      const data = await getTweetList();
      setTweetList(data);
      setIsLoadingTweets(false);
    } catch (error) {
      setError("Si è verificato un errore.");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    tweetList,
    setTweetList,
    isLoadingTweets,
    setIsLoadingTweets,
    fetchData,
    error,
  };
};
