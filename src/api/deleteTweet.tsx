import axios from "axios";

export const deleteTweet = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3004/tweets/${id}`);
  } catch (error: any) {
    throw error;
  }
};
