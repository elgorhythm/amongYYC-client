import { Box, Stack } from "@mui/material";
import React from "react";

import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightBar/RightBar";
import FirebaseProvider from "../../providers/FirebaseProvider";
import AuthProvider from "../../providers/AuthProvider";
import Profile from "../../components/component/Profile"
const UserProfile
 = () => {
  return (
    <Box>
      <FirebaseProvider>
        <AuthProvider>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <Profile />
            <RightBar />
          </Stack>
        </AuthProvider>
      </FirebaseProvider>
    </Box>
  );
};

export default UserProfile;