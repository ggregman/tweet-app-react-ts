import { useContext, useState } from "react";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { TweetContext } from "../context/TweetContext";
import { Box, Text, Button } from "@chakra-ui/react";

type TweetCardDetailsProps = {
  index: number;
  handleDeleteTweet: (index: number) => void;
};

export const TweetDetails = ({
  index,
  handleDeleteTweet,
}: TweetCardDetailsProps) => {
  const tweetContext = useContext(TweetContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Box className="tweetDetails">
      <Text style={{ color: "#C0C0C0" }}> {tweetContext.content.dateTime}</Text>
      <Box style={{ alignContent: "bottom" }}>
        <Box style={{ float: "right" }}>
          <Button onClick={() => handleDeleteTweet(index)}>
            <AiFillDelete />
          </Button>
        </Box>
        <Box
          style={{
            display: "flex",
            position: "relative",
            gap: "0.2rem",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: isLiked === true ? "red" : "white",
              cursor: "pointer",
            }}
            onClick={handleToggleLike}
          >
            <AiOutlineHeart />
          </Button>
          <Text>
            {isLiked
              ? 1 + tweetContext.content.likes
              : tweetContext.content.likes}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
