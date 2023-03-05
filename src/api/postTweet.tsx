import axios from "axios";
import { DateTime } from "luxon";

export const postTweet = async () => {
  const newTweet = {
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
  };

  try {
    await axios.post("http://localhost:3004/tweets", newTweet);
  } catch {
    throw new Error("Si è verificato un errore");
  }
};
