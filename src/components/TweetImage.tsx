import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import TweetContext from "../context/TweetContext";

type TweetImageProps = {
  index: number;
};

export const TweetImage = ({ index }: TweetImageProps) => {
  const { tweetList } = useContext(TweetContext);

  return (
    <Image
      rounded='2em'
      width="100%"
      src={tweetList[index].content.imgUrl}
      alt={tweetList[index].user.username}
    />
  );
};
