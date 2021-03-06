import { Box, Stack } from "@mui/material";
import React from "react";
import GameFeed from "../../components/gameFeed/GameFeed";
import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightBar/RightBar";
import LeaderBoard from "../../components/leaderBoard/LeaderBoard";
import FirebaseProvider from "../../providers/FirebaseProvider";
import AuthProvider from "../../providers/AuthProvider";

const LeaderBoardPage = () => {
  return (
    <Box>
      <FirebaseProvider>
        <AuthProvider>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <LeaderBoard />
            <RightBar />
          </Stack>
        </AuthProvider>
      </FirebaseProvider>
    </Box>
  );
};

export default LeaderBoardPage;
