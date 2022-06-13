import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import NavBar from "../navbar/NavBar"
import RightBar from '../rightBar/RightBar';
import SideBar from '../sideBar/SideBar';


function Account() {
  return (
    <Box>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <Typography>Accounts</Typography>
            <RightBar />
          </Stack>
        </Box>
  )
}

export default Account