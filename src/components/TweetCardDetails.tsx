import { useState } from "react";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { TweetType } from "../types/tweetType";

type TweetCardDetailsProps = {
  tweet: TweetType;
  index: number;
  handleDelete: (index: number) => void;
};

export const TweetCardDetails = ({
  tweet,
  index,
  handleDelete,
}: TweetCardDetailsProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="tweetDetails">
      <div className="card_header">
        <img
          className="avatar"
          src={tweet.user.avatarUrl}
          alt={tweet.user.username}
        />
        <div className="tweetAuthor">
          <h3 style={{ margin: 0 }}>
            {tweet.user.name} {tweet.user.surname}
          </h3>
          <h4 className="username">@{tweet.user.username}</h4>
        </div>
      </div>
      <p>{tweet.content.text}</p>
      <p style={{ color: "#C0C0C0" }}> {tweet.content.dateTime}</p>
      <div style={{ alignContent: "bottom" }}>
        <div style={{ float: "right" }}>
          <button onClick={() => handleDelete(index)}>
            <AiFillDelete />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            gap: "0.2rem",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: isLiked === true ? "red" : "white",
              cursor: "pointer",
            }}
            onClick={handleToggleLike}
          >
            <AiOutlineHeart />
          </button>
          <p>{isLiked ? 1 + tweet.content.likes : tweet.content.likes}</p>
        </div>
      </div>
    </div>
  );
};
