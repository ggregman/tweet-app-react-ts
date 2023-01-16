import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { TweetContext } from "../context/TweetContext";
import { TweetType } from "../types/tweetType";
import { TweetContent } from "./TweetContent";
import { TweetDetails } from "./TweetDetails";
import { TweetImage } from "./TweetImage";
import { TweetUser } from "./TweetUser";

type TweetCardProps = {
  tweet: TweetType;
  index: number;
  handleDeleteTweet: (index: number) => void;
};

export const TweetCard = ({
  tweet,
  index,
  handleDeleteTweet,
}: TweetCardProps) => {
  const TweetProvider = ({ children }: { children: React.ReactNode }) => {
    const tweetInformation = {
      id: tweet.id,
      user: {
        avatarUrl: tweet.user.avatarUrl,
        surname: tweet.user.surname,
        name: tweet.user.name,
        username: tweet.user.username,
      },
      content: {
        imgUrl: tweet.content.imgUrl,
        text: tweet.content.text,
        dateTime: tweet.content.dateTime,
        likes: tweet.content.likes,
      },
    };

    const [tweetInfo] = useState(tweetInformation);
    return (
      <TweetContext.Provider value={tweetInfo}>
        <Box className={`tweetCard-dark`}>{children}</Box>
      </TweetContext.Provider>
    );
  };
  return (
    <TweetProvider>
      <TweetImage />
      <TweetUser />
      <TweetContent />
      <TweetDetails index={index} handleDeleteTweet={handleDeleteTweet} />
    </TweetProvider>
  );
};
