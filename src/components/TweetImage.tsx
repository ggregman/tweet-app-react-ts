import { useContext } from "react";
import { TweetContext } from "../context/TweetContext";

export const TweetImage = () => {
  const tweetContext = useContext(TweetContext);

  return (
    <img
      width="100%"
      src={tweetContext.content.imgUrl}
      alt={tweetContext.user.username}
    />
  );
};
