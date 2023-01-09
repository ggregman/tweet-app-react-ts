type TweetUserType = {
  avatarUrl: string;
  surname: string;
  name: string;
  username: string;
};

type TweetContentType = {
  imgUrl: string;
  text: string;
  dateTime: string;
  likes: number;
};

export type TweetType = {
  id: number;
  user: TweetUserType;
  content: TweetContentType;
};
