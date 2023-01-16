import { useContext } from "react";
import { TweetContext } from "../context/TweetContext";

export const TweetUser = () => {
  const tweetContext = useContext(TweetContext);
  return (
    <div className="card_header">
      <img
        className="avatar"
        src={tweetContext.user.avatarUrl}
        alt={tweetContext.user.username}
      />
      <div className="tweetAuthor">
        <h3 style={{ margin: 0 }}>
          {tweetContext.user.name} {tweetContext.user.surname}
        </h3>
        <h4 className="username">@{tweetContext.user.username}</h4>
      </div>
    </div>
  );
};
