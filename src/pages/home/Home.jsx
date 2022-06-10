import { Box, Stack } from "@mui/material";
import React from "react";
import GameFeed from "../../components/gameFeed/GameFeed";
import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightBar/RightBar";


const Home = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <GameFeed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default Home;
