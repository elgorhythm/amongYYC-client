import { Box, Stack } from '@mui/material';
import React from 'react'
import NavBar from "../../components/navbar/NavBar"
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';
import Login from "../../components/login/login"

function SignIn() {
    return (
        <Box>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <Login/>
            <RightBar />
          </Stack>
        </Box>
      );
}

export default SignIn