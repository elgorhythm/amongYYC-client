import { Box, Stack } from "@mui/material";
import React from "react";

import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import RightBar from "../../components/rightBar/RightBar";
import FirebaseProvider from "../../providers/FirebaseProvider";
import AuthProvider from "../../providers/AuthProvider";
import TasksAdmin from '../../components/component/TasksAdmin'


const AdminTasks = () => {
  return (
    <Box>
      <FirebaseProvider>
        <AuthProvider>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar />
            <TasksAdmin/>
            <RightBar />
          </Stack>
        </AuthProvider>
      </FirebaseProvider>
    </Box>
  );
};

export default AdminTasks