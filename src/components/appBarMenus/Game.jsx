import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import NavBar from "../../components/navbar/NavBar"
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';


function Game() {
  return (
    <Box>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <Typography>Game</Typography>
            <RightBar />
          </Stack>
        </Box>
  )
}

export default Game