import { Box, Stack } from "@mui/material";
import React from "react";
import GameFeed from "../../components/gameFeed/GameFeed";
import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightBar/RightBar";
import FirebaseProvider from "../../providers/FirebaseProvider";
import AuthProvider from "../../providers/AuthProvider";

import HomePage from "../../components/component/MainPage";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Box >
          <NavBar />
          <Stack direction="row" spacing={2} >
            <SideBar />
            {/* <GameFeed /> */}
            {/* <RightBar /> */}
          </Stack>
          {/* <HomePage />
          <Stack>333</Stack>
          <Footer /> */}
        </Box>
      </AuthProvider>
    </FirebaseProvider>
  );
};

export default Home;
