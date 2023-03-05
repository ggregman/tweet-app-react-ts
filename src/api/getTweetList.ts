import axios from "axios";
import { TweetType } from "../types/tweetType";

export const getTweetList = async () => {
  try {
    const { data } = await axios.get("http://localhost:3004/tweets");
    return data;
  } catch (error: any) {
    throw error;
  }
};
