import React, { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FirebaseContext } from "../../providers/FirebaseProvider";
import { collection, doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#d64224" };
  const marginTop = { marginTop: 5 };
  const btnstyle = { backgroundColor: "#d64224" };
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const signupFn = authContext.signup;
  const signupError = authContext.authError;
  const user = authContext.user;
  const isNewUser = authContext.isNewUser;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState("test gender");
  const [age, setAge] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [termsAccept, setTermsAccept] = useState(false);
  const [inputErr, setInputErr] = useState(null);

  const register = async () => {
    if (
      !name ||
      !email ||
      !gender ||
      !age ||
      !password ||
      !rePassword ||
      !termsAccept
    ) {
      setInputErr("All fields are required");
    }

    // This part needs fixing, not working properly
    // else if (!isNaN(parseInt(age))) {
    //   setInputErr("Invalid age");
    // }
    else if (password !== rePassword) {
      setInputErr("Passwords do not match");
    } else {
      try {
        setInputErr(null);
        await signupFn(email, password);
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  useEffect(() => {
    const createUserData = async () => {
      console.log("UseEffect being called");
      try {
        let collectionRef = collection(db, "users");
        let docRef = doc(collectionRef, user.uid);
        const userData = {
          email: user.email,
          name: name,
          gender: gender,
          age: parseInt(age),
          termsAccept: termsAccept,
          admin: false,
        };
        await setDoc(docRef, userData);
        navigate("/");
      } catch (ex) {
        console.log("FIRESTORE ADD FAILURE!", ex.message);
      }
    };
    if (user && isNewUser) {
      createUserData();
    }
  }, [user, isNewUser]);
  console.log("user is ", user);
  console.log("newUser is ", isNewUser);
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
            placeholder="Enter your age "
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            onChange={(event) => {
              setRePassword(event.target.value);
            }}
          />
          {(signupError || inputErr) && (
            <p style={{ color: "red" }}>
              {inputErr ? inputErr : signupError.toString().slice(9)}
            </p>
          )}
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
            onChange={(event) => {
              setTermsAccept(event.target.value);
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
