import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

import { FirebaseContext } from "../../providers/FirebaseProvider";
function UsersList() {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    let collectionRef = collection(db, "users");
    let queryRef = query(collectionRef, orderBy("name"));
    const unsubscribe = onSnapshot(queryRef, (querySnap) => {
      if (querySnap.empty) {
        console.log("No Docs Found");
      } else {
        let UsersData = querySnap.docs.map((doc) => {
          return { ...doc.data(), DOC_ID: doc.id };
        });
        setUsers(UsersData);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <br />
      {/* {users.map((User) => {
        return (
          <ul key={User.DOC_ID}>
            <li>name:{User.name}</li>
            <li>Vehicle:{User.Vehicle}</li>
            <li>docId:{User.DOC_ID}</li>
          </ul>
        ); */}
      {users.map((User) => {
        return (
          <Box style={{ paddingTop: 20 }} key={User.DOC_ID}>
            <Typography>Name: {User.name} </Typography>
            <Typography>Email: {User.email} </Typography>
            <Typography>Age: {User.age} </Typography>
            <Typography>Gender: {User.gender} </Typography>
            <Typography>Terms Accepted: {User.termsAccept} </Typography>
          </Box>
        );
      })}
      )
    </div>
  );
}

export default UsersList;
