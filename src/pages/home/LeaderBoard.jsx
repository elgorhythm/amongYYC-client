import { Box, Stack } from "@mui/material";
import React from "react";
import GameFeed from "../../components/gameFeed/GameFeed";
import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightBar/RightBar";
import LeadBoard from "../../components/leaderBoard/LeadBoard";


const LeaderBoard = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <LeadBoard/>
        <RightBar />
      </Stack>
    </Box>
  );
};

export default LeaderBoard;
