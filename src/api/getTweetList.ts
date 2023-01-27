import axios from "axios";

export const getTweetList = async () => {
  const { data } = await axios.get("http://localhost:3004/tweets");
  return data;
};
