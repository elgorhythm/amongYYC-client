import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

import { FirebaseContext } from "../../providers/FirebaseProvider";

function TaskManagement() {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    let collectionRef = collection(db, "tasks");
    let queryRef = query(collectionRef, orderBy("title"));
    const unsubscribe = onSnapshot(queryRef, (querySnap) => {
      if (querySnap.empty) {
        console.log("No Docs Found");
      } else {
        let TaskData = querySnap.docs.map((doc) => {
          return { ...doc.data(), DOC_ID: doc.id };
        });
        setTasks(TaskData);
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
      {tasks.map((Task) => {
        return (
          <Box style={{ paddingTop: 20 }} key={Task.DOC_ID}>
            <Typography>Title: {Task.title} </Typography>
            <Typography>Description: {Task.description} </Typography>
            {/* <Typography>Completed: {Task.completed} </Typography>*/}
            <Typography>Status: {Task.status} </Typography>  
            {/* <Typography>Age: {User.age} </Typography>
            <Typography>Gender: {User.gender} </Typography>
            <Typography>Terms Accepted: {User.termsAccept} </Typography>
            */}
          </Box> 
        );
      })}
      )
    </div>
  );
}

export default TaskManagement;
