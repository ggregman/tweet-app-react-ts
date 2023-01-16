import { useContext } from "react";
import { TweetContext } from "../context/TweetContext";
import { Box, Image, Heading } from "@chakra-ui/react";

export const TweetUser = () => {
  const tweetContext = useContext(TweetContext);
  return (
    <Box className="card_header">
      <Image
        className="avatar"
        src={tweetContext.user.avatarUrl}
        alt={tweetContext.user.username}
      />
      <Box className="tweetAuthor">
        <Heading as={"h3"} style={{ margin: 0 }}>
          {tweetContext.user.name} {tweetContext.user.surname}
        </Heading>
        <Heading as={"h4"} className="username">
          @{tweetContext.user.username}
        </Heading>
      </Box>
    </Box>
  );
};
