import { Box, Typography } from '@mui/material';
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
  // const [admin, setAdmin] = useState(false)
  

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
     <Box style={{paddingTop:20}}>
            <Typography>Name:         {name} </Typography>
            <Typography>Email:         {email} </Typography>
            {/* <Typography>Admin:         {admin} </Typography> */}
            <Typography>Age:         {age} </Typography>
            <Typography>Gender:         {gender} </Typography>
            <Typography>Terms Accepted:         {termsAccept} </Typography>
            
            
            
     </Box>       
  )
}

export default Profile