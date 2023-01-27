import { TweetType } from "../types/tweetType";
import { useState } from "react";
import { postTweet } from "../api/postTweet";

type useHandleTweetsProps = {
  tweetList: TweetType[];
  setTweetList: (tweetList: TweetType[]) => void;
  setIsLoadingTweets: (isLoading: boolean) => void;
};

export const useHandleTweets = ({
  tweetList,
  setTweetList,
}: useHandleTweetsProps) => {
  const [isLoadingPostRequest, setIsLoadingPostRequest] = useState(false);

  const handleDeleteTweet = (index: number) => {
    const tempArray = [...tweetList];
    tempArray.splice(index, 1);
    setTweetList(tempArray);
  };

  const handleAddTweet = async () => {
    setIsLoadingPostRequest(true);
    await postTweet();
    setIsLoadingPostRequest(false);
  };

  return {
    handleDeleteTweet,
    handleAddTweet,
    isLoadingPostRequest,
    setIsLoadingPostRequest,
  };
};
