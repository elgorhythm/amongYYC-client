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
import Widget from "../../components/component/widget/Widget";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Box>
          <NavBar />
          <Stack direction="row" flex={3}>
            <SideBar flex={1} />
            {/* <GameFeed /> */}
            {/* <RightBar /> */}
            <Stack direction="column" spacing={2} flex={2}>
              <Stack direction="row" spacing={2}>
                <Widget type="user" />
                <Widget type="tasks" />
                <Widget type="coins" />
                <Widget type="donated" />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Chart />
              </Stack>
            </Stack>
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
