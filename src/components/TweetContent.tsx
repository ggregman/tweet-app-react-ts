import { useContext } from "react";
import { TweetContext } from "../context/TweetContext";

export const TweetContent = () => {
  const tweetContext = useContext(TweetContext);
  return <div>{tweetContext.content.text}</div>;
};
