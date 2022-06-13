import { Box, Stack } from "@mui/material";
import React from "react";
import GameFeed from "../../components/gameFeed/GameFeed";
import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightBar/RightBar";
import Registration from "../../components/registration/Registration";
import FirebaseProvider from "../../providers/FirebaseProvider";
import AuthProvider from "../../providers/AuthProvider";

const SignUp = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <FirebaseProvider>
          <AuthProvider>
            <Registration />
          </AuthProvider>
        </FirebaseProvider>
        <RightBar />
      </Stack>
    </Box>
  );
};

export default SignUp;
