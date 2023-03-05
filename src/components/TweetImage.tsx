import { Image } from "@chakra-ui/react";
import { TweetType } from "../types/tweetType";

type TweetImageProps = {
  tweet: TweetType;
};

export const TweetImage = ({ tweet }: TweetImageProps) => {
  return (
    <Image
      rounded="2em"
      width="100%"
      src={tweet.content.imgUrl}
      alt={tweet.user.username}
    />
  );
};
