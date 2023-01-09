import { DateTime } from "luxon";
import { TweetType } from "../types/tweetType";

type useHandleTweetsProps = {
  tweetList: TweetType[];
  setTweetList: (tweetList: TweetType[]) => void;
};

export const useHandleTweets = ({
  tweetList,
  setTweetList,
}: useHandleTweetsProps) => {
  const handleAddTweet = () => {
    const tempTweet = [...tweetList];
    tempTweet.push({
      id: Math.floor(Math.random() * 1000),
      user: {
        avatarUrl:
          "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png",
        surname: "User",
        name: "Temporary",
        username: "temporaryuser",
      },
      content: {
        imgUrl:
          "https://www.gamesoul.it/wp-content/uploads/2020/01/kobe-bryant-nba-2k17.jpg",
        text: "Learning how to extract components into reusable pieces while gazing at the sunset. What could go wrong?",
        dateTime: DateTime.now()
          .setLocale("en")
          .toFormat("hh:mm a · yyyy MMM, dd"),
        likes: Math.floor(Math.random() * 100),
      },
    });
    setTweetList(tempTweet);
  };

  const handleDelete = (index: number) => {
    const tempTweet = [...tweetList];
    tempTweet.splice(index, 1);
    setTweetList(tempTweet);
  };

  const handleAddLikes = (id: number) => {
    const tempTweet = [...tweetList];
    tempTweet.map((tweet) =>
      tweet.id === id ? { ...tweet, likes: tweet.content.likes++ } : tweet
    );
    setTweetList(tempTweet);
  };

  return { handleAddTweet, handleDelete, handleAddLikes };
};
