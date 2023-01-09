import { DateTime } from "luxon";

type UserType = {
  avatarUrl: string;
  surname: string;
  name: string;
  username: string;
};

type TweetContentType = {
  imgUrl: string;
  text: string;
  dateTime: any;
  likes: number;
};

export type TweetType = {
  id: number;
  user: UserType;
  content: TweetContentType;
};
