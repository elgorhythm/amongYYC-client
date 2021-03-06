import { Box, Stack } from "@mui/material";
import React from "react";

import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightBar/RightBar";
import FirebaseProvider from "../../providers/FirebaseProvider";
import AuthProvider from "../../providers/AuthProvider";
import Trickster from "../../components/component/Trickster";

const GameTrickster
 = () => {
  return (
    <Box>
      <FirebaseProvider>
        <AuthProvider>
          <NavBar />
          <Stack direction="row"  flex={3}>
            <SideBar flex={1} /> 
            
            <Trickster flex={2}   />
           
            {/* <RightBar /> */}
          </Stack>
        </AuthProvider>
      </FirebaseProvider>
    </Box>
  );
};

export default GameTrickster;