import React, { useContext, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutline";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#d64224" };
  const marginTop = { marginTop: 5 };
  const btnstyle = { backgroundColor: "#d64224" };
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const signupFn = authContext.signup;
  const signupError = authContext.authError;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState("test gender");
  const [age, setAge] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState();

  const register = () => {
    if (!name || !email || !gender || !age || !password || !terms) {
      setError("All fields are required");
    } else if (password !== rePassword) {
      setError("Passwords do not match");
    } else {
      try {
        signupFn(email, password);
        const signupError = authContext.authError;
        setError(signupError)
      } catch {
        setError(signupError.toString().slice(9));
      }
    }
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <div>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
              onChange={(event) => {
                setGender(event.target.value);
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Age"
            placeholder="Enter your email "
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            onChange={(event) => {
              setRePassword(event.target.value);
            }}
          />
          <p style={{ color: "red" }}>{error}</p>
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
            onChange={(event) => {
              setTerms(event.target.value);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={btnstyle}
            onClick={register}
          >
            Register
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default Signup;
