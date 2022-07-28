import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FirebaseContext } from "../../providers/FirebaseProvider";

function Profile() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [termsAccept, setTermsAccept] = useState(null);
  const [notVoted, setNotVoted] = useState(true);
  const [hasVotedCorrectly, setHasCotedCorrectly] = useState(false);
  const [ghostedForTheWeek, setGhostedForTheWeek] = useState(false);
  const [totalScoreWon, setTotalScoreWon] = useState(0);
  const [weeklyScore, setWeeklyScore] = useState(0);

  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  useEffect(() => {
    const getUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());
          setName(docSnap.data().name);
          setEmail(docSnap.data().email);
          setAge(docSnap.data().age);
          setGender(docSnap.data().gender);

          // setAdmin(docSnap.data().admin);

          // console.log("Name is ", docSnap.data().name);
        } else {
          console.log("No such document!");
        }
      }
    };

    getUserData();
  }, [user, db]);

  return (
    <Box
      style={{
        marginTop: "30px",
        marginLeft: "20px",
      }}
    >
      <Typography
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          marginBottom: "1px",
        }}
      >
        Name: {name}{" "}
      </Typography>
      <Typography>Email: {email} </Typography>
      <Typography>Password:{"*******"}</Typography>
      <Typography>Age: {age} </Typography>
    
     <Typography>User Created @ : {"July 4,2022"}</Typography>
      <Typography></Typography>
      <Typography></Typography>
      <Button
      style={{
        backgroundColor: "#394048",
        color: "white",
        fontFamily: "Roboto",
        fontSize: "10px",
        fontWeight: "bold",
        
        marginLeft: "10px",}}

      
        onClick={() => {
          setTermsAccept(true);
        }}
      >
        Edit Profile
      </Button>
      <Button
        style={{
          backgroundColor: "Red",
          color: "white",
          fontFamily: "Roboto",
          fontSize: "10px",
          fontWeight: "bold",
        }}
        onClick={() => {
          setTermsAccept(true);
        }}
      >
        Delete
      </Button>
    </Box>
  );
}

export default Profile;
