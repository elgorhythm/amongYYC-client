import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { bgcolor } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../providers/FirebaseProvider";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import {
  collection,
  doc,
  getDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import logo from "../../../src/assets/fonts/logo.png";

const appBarMenus = [];
const settings = ["Profile", "UsersList", "TasksAdmin", "Trickster"];

const ResponsiveAppBar = () => {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [name, setName] = useState(null);

  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const logoutFn = authContext.logout;

  console.log("user is: ", user); //probably need to remove this in the end

  useEffect(() => {
    const getUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());
          setName(docSnap.data().name);
          // console.log("Name is ", docSnap.data().name);
        } else {
          console.log("No such document!");
        }
      }
    };

    getUserData();
  }, [user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const appBarStyle = {
    backgroundColor: "#394048",
    color: "white",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const logButChange = () => {
    let path = `/signin`;
    navigate(path);
  };
  const RegButChange = () => {
    let path = `/signup`;
    navigate(path);
  };

  const handleAbdIcon = () => {
    let path = `/`;
    navigate(path);
  };
  const homeFromLogOut = () => {
    let path = `/`;
    navigate(path);
  };

  const logoutBtn = (
    <Button
      sx={{
        color: "skyblue",
        margin: 0,
        width: "90px",
        textDecoration: "underline",
        marginRight: 1,
      }}
      variant="text"
      onClick={() => {
        try {
          logoutFn();
          homeFromLogOut();
          setName(null);
        } catch (ex) {
          console.log(ex.message);
        }
      }}
    >
      LOGOUT
    </Button>
  );

  const loginBtn = (
    <Button
      sx={{
        color: "skyblue",
        margin: 0,
        width: "90px",
        textDecoration: "underline",
      }}
      variant="text"
      onClick={logButChange}
    ></Button>
  );

  const regBtn = (
    <Button
      variant="text"
      sx={{
        color: "skyblue",
        margin: 0,
        width: "90px",
        textDecoration: "underline",
        marginRight: 1,
      }}
      onClick={RegButChange}
    >
      Register
    </Button>
  );

  return (
    <AppBar position="static" style={appBarStyle}>
      <Container maxWidth="x2">
        <Toolbar disableGutters>
          {/* <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            onClick={handleAbdIcon}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "AmaticSC-Bold",
              
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Among YYC
          </Typography> */}
          <Typography variant="h6">
            <img src={logo} alt="logo" style={{ width: "100px" }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {appBarMenus.map((appBarMenus) => (
                  <MenuItem key={appBarMenus} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{appBarMenus}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            }
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {appBarMenus.map((appBarMenus) => (
              <Button
                key={appBarMenus}
                component={Link}
                to={`/${appBarMenus}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {appBarMenus}
              </Button>
            ))}
          </Box>
          <Box>
            {name && (
              <Typography
                variant="h7"
                // noWrap
                sx={{
                  mr: 1,
                  flexGrow: 1,
                  fontFamily: "serif",
                  fontWeight: 500,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Welcome {name}
              </Typography>
            )}
          </Box>
          <Box>{user ? logoutBtn : loginBtn}</Box>
          <Box> {user ? null : regBtn}</Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  component={Link}
                  to={`/${setting}`}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
