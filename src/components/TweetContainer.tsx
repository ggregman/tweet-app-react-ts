import { TweetType } from "../types/tweetType";
import { TweetCard } from "./TweetCard";

type TweetContainerProps = {
  tweetList: TweetType[];
  handleDeleteTweet: (index: number) => void;
};

export const TweetContainer = ({
  tweetList,
  handleDeleteTweet,
}: TweetContainerProps) => {
  return (
    <div className="container">
      {tweetList.map((tweet, index) => {
        return (
          <TweetCard
            key={index}
            index={index}
            handleDeleteTweet={handleDeleteTweet}
            tweet={tweet}
          />
        );
      })}
    </div>
  );
};
