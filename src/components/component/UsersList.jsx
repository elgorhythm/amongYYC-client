import { Button, Typography } from "@mui/material";
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
      <Typography variant="h4">Users</Typography>
      {users.map((User) => {
        return (
          <Box
              style={{
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              flexDirection: "column",
              marginBottom: 20,
              flex: 1,
              flexWrap: "wrap",
            }}
            key={User.DOC_ID}
          >
            <Typography
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
                marginTop: "10px",

                fontFamily: "Roboto, sans-serif",
                fontWeight: "bold",
              }}
            >
              Name: {User.name}{" "}
            </Typography>
            <Typography>Email: {User.email} </Typography>
            <Typography>Age: {User.age} </Typography>
            <Typography>Gender: {User.gender} </Typography>
            <Typography>Score:{User.totalScore}</Typography>
            <Typography>Terms Accepted: {User.termsAccept} </Typography>
            <Button
              style={{
                paddingTop: 10,
                marginTop: 10,
                marginBottom: 10,

                width: "100%",
              }}
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
            <Button
              style={{
                paddingTop: 10,
                marginTop: 10,
                marginBottom: 10,
                width: "100%",
                backgroundColor: "Red",
                color: "white",
              }}
            >
              Delete
            </Button>
          </Box>
        );
      })}
    </div>
  );
}

export default UsersList;
