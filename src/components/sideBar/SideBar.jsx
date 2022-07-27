import React from "react";
import "./sideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TaskIcon from "@mui/icons-material/Task";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="Sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <span className="logo">Among yyc</span> */}
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>DashBoard</span>
            </li>
          </Link>
          <p className="title">LIST</p>

          <Link to="/usersList" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/TasksAdmin" style={{ textDecoration: "none" }}>
            <li>
              <TaskIcon className="icon" />
              <span>Tasks</span>
            </li>
          </Link>
          <Link to="/Trickster" style={{ textDecoration: "none" }}>
          <li>
            <AddReactionIcon className="icon" />
            <span>Tricksters</span>
          </li>
          </Link>
          <li>
            <EmojiEventsIcon className="icon" />
            <span>Raffles</span>
          </li>
          <p className="title">GAME INFO</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <Link to="/profile" >
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={signOut}>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default SideBar;
