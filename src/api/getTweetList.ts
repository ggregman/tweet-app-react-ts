import { tweetMock } from "./tweetMock";

export const getTweetList = () => {
  console.log("chiamata fake API")
  return tweetMock;
};
