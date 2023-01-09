import { TweetType } from "../types/tweetType";
import { TweetCard } from "./TweetCard";

type TweetContainerProps = {
  tweetList: TweetType[];
  handleDelete: (index: number) => void;
  handleAddLikes: (id: number) => void;
};

export const TweetContainer = ({
  tweetList,
  handleDelete,
  handleAddLikes,
}: TweetContainerProps) => {
  return (
    <div className="container">
      {tweetList.map((tweet, index) => {
        return (
          <TweetCard
            key={index}
            index={index}
            handleDelete={() => handleDelete(index)}
            handleAddLikes={() => handleAddLikes(tweet.id)}
            tweet={tweet}
          />
        );
      })}
    </div>
  );
};
