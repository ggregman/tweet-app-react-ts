import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import { BiRefresh } from "react-icons/bi";
import "./App.css";
import { TweetContainer } from "./components/TweetContainer";

import { QueryClient, QueryClientProvider } from "react-query";
import { postTweet } from "./api/postTweet";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TweetContainer />
    </QueryClientProvider>
  );
}

export default App;
