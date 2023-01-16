import { useContext } from "react";
import { TweetContext } from "../context/TweetContext";
import { Image } from "@chakra-ui/react";

export const TweetImage = () => {
  const tweetContext = useContext(TweetContext);

  return (
    <Image
      width="100%"
      src={tweetContext.content.imgUrl}
      alt={tweetContext.user.username}
    />
  );
};
