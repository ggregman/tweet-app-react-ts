import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import TweetContext from "../context/TweetContext";

type TweetCardDetailsProps = {
  index: number;
};

export const TweetDetails = ({ index }: TweetCardDetailsProps) => {
  const { tweetList, handleDeleteTweet } = useContext(TweetContext);

  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Box>
      <Text style={{ color: "#C0C0C0" }}>
        {tweetList[index].content.dateTime}
      </Text>
      <Flex justifyContent="space-between" alignContent="center">
        <Box
          style={{
            display: "flex",
            position: "relative",
            gap: "0.2rem",
            alignItems: "center",
          }}
        >
          <Button
            rounded="100"
            p="0.5em"
            border="none"
            color={isLiked ? "white" : "gray"}
            backgroundColor={isLiked ? "#f91880" : "transparent"}
            cursor="pointer"
            _hover={{ bg: "#200914", color: "#f91880" }}
            onClick={handleToggleLike}
          >
            <AiOutlineHeart size="1.5em" />
          </Button>
          <Text color={isLiked ? "#f91880" : "gray"}>
            {isLiked
              ? 1 + tweetList[index].content.likes
              : tweetList[index].content.likes}
          </Text>
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
            rounded="100"
            p="0.5em"
            border="none"
            color={"gray"}
            cursor="pointer"
            _hover={{ bg: "#200914", color: "#f91880" }}
            onClick={() => handleDeleteTweet(index)}
          >
            <FaRegTrashAlt size="1.5em" />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
