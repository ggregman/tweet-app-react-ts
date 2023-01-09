import { TweetType } from "../types/tweetType";
import { TweetCardDetails } from "./TweetCardDetails";

type TweetCardProps = {
  tweet: TweetType;
  index: number;
  handleDelete: (index: number) => void;
  handleAddLikes: (id: number) => void;
};

export const TweetCard = ({
  tweet,
  index,
  handleDelete,
  handleAddLikes,
}: TweetCardProps) => {
  return (
   <div className="tweetCard">
      <img width="100%" src={tweet.content.imgUrl} alt={tweet.user.username} />
      <TweetCardDetails
        tweet={tweet}
        index={index}
        handleDelete={handleDelete}
        handleAddLikes={handleAddLikes}
      />
    </div>
  );
};