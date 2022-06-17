import React, { useContext, useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#d64224" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#d64224" };
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const loginFn = authContext.login;
  const loginError = authContext.authError;
  const user = authContext.user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputErr, setInputErr] = useState(null);

  const signin = async () => {
    if (!email || !password) {
      setInputErr("All fields are required");
    } else {
      try {
        setInputErr(null);
        await loginFn(email, password);
        console.log("user is ", user)
       
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  useEffect(() => {
    const navToHome = async () => {
      console.log("Useffect being called");
      try {
        navigate("/");
      } catch (ex) {
        console.log("NAVIGATION FAILURE", ex.message);
      }
    };
    if (user) {
      navToHome();
    }
  }, [user]);

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {(loginError || inputErr) && (
          <p style={{ color: "red" }}>
            {inputErr ? inputErr : loginError.toString().slice(9)}
          </p>
        )}
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={signin}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
