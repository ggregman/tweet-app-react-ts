import { useContext, useState } from "react";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { TweetContext } from "../context/TweetContext"

type TweetCardDetailsProps = {
  index: number;
  handleDeleteTweet: (index: number) => void;
};

export const TweetDetails = ({
  index,
  handleDeleteTweet,
}: TweetCardDetailsProps) => {
  const tweetContext = useContext(TweetContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="tweetDetails">
      <p style={{ color: "#C0C0C0" }}> {tweetContext.content.dateTime}</p>
      <div style={{ alignContent: "bottom" }}>
        <div style={{ float: "right" }}>
          <button onClick={() => handleDeleteTweet(index)}>
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
          <p>
            {isLiked
              ? 1 + tweetContext.content.likes
              : tweetContext.content.likes}
          </p>
        </div>
      </div>
    </div>
  );
};
