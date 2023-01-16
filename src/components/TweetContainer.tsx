import { TweetType } from "../types/tweetType";
import { TweetCard } from "./TweetCard";

type TweetContainerProps = {
  tweetList: TweetType[];
  handleDelete: (index: number) => void;
};

export const TweetContainer = ({
  tweetList,
  handleDelete,
}: TweetContainerProps) => {
  return (
    <div className="container">
      {tweetList.map((tweet, index) => {
        return (
          <TweetCard
            key={index}
            index={index}
            handleDelete={handleDelete}
            tweet={tweet}
          />
        );
      })}
    </div>
  );
};
