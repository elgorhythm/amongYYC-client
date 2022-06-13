import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import NavBar from "../../components/navbar/NavBar"
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';


function Profile() {
  return (
    <Box>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <Typography>User Profile and Setting</Typography>
            <RightBar />
          </Stack>
        </Box>
  )
}

export default Profile