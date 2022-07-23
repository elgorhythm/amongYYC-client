import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react'
import {

  doc,
  getDoc,
 


} from "firebase/firestore";
import { useState, useEffect } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import { FirebaseContext } from '../../providers/FirebaseProvider';

function Profile() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [termsAccept, setTermsAccept] = useState(null);
  const [notVoted,setNotVoted]=useState(true)
  const [hasVotedCorrectly,setHasCotedCorrectly]=useState(false)
  const [ghostedForTheWeek,setGhostedForTheWeek]= useState(false)
  const [totalScoreWon,setTotalScoreWon]=useState(0)
  const [weeklyScore,setWeeklyScore]=useState(0)

  
  
  
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
          setNotVoted(docSnap.data().hasNotVoted)
          setHasCotedCorrectly(docSnap.data().hasVotedCorrectly)
          setGhostedForTheWeek(docSnap.data().isGhost)
          setTotalScoreWon(docSnap.data().totalScore)
          setTermsAccept(docSnap.data().termsAccept);
          
          

          // setAdmin(docSnap.data().admin);
          
          // console.log("Name is ", docSnap.data().name);
        } else {
          console.log("No such document!");
        }
      }
    };

    getUserData();
  }, [user,db]);


  return (
     <Box style={{paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    backgroundColor:"#f5f5f5",
    borderRadius:10,
    boxShadow: "0px 0px 10px #000000",
    marginTop:20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
 

    
     
     }}>
            <Typography>Name:         {name} </Typography>
            <Typography>Email:         {email} </Typography>
            <Typography>Age:         {age} </Typography>
            <Typography>Gender:         {gender} </Typography>
            <Typography>Yet To vote:      {notVoted}</Typography>
            <Typography>Has Voted Correctly:      {hasVotedCorrectly}</Typography>
            <Typography>Eliminated for the Week:   {ghostedForTheWeek}</Typography>
            <Typography>Total Score Won:           {totalScoreWon}</Typography>
            <Typography>Terms Accepted:             {termsAccept} </Typography>
            <Button style={{marginTop:20,
            marginBottom:20,
            marginLeft:20,
            marginRight:20,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            
            borderRadius:10,
            boxShadow: "0px 0px 10px #000000",
            }}

            
            
            
            variant="contained" color="primary" onClick={()=>{setTermsAccept(true)}
            }>Edit</Button>
            <Button style={{
            marginBottom:20,
            marginLeft:20,
            marginRight:20,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor:"Red",
            alignItems: "center",
            borderRadius:10,
            boxShadow: "0px 0px 10px #000000",
            }}

            
            
            
            variant="contained" color="primary" onClick={()=>{setTermsAccept(true)}
            }>Delete</Button>

     </Box>       
  )
}

export default Profile