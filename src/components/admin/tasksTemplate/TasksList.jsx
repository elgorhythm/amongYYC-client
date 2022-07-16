import { Box } from "@mui/material";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FirebaseContext } from "../../../providers/FirebaseProvider";
import TaskDataServices from "./TaskDataServices";

const TasksList = ({ getTaskId }) => {
  const fbContext = useContext(FirebaseContext);
  let db = fbContext.db;
  let taskCollectionRef = collection(db, "tasks");

  const deleteTask = (id) => {
    const taskDoc = doc(db, "tasks", id);
    return deleteDoc(taskDoc);
  };

  const getAllTasks = () => {
    return getDocs(taskCollectionRef);
  };

  const [Tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const data = await getAllTasks();
    console.log(data.docs);
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await deleteTask(id);
    getTasks();
  };
 
  return (
    <>
      <div>
      
        <Button variant="dark edit" onClick={getTasks}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(Tasks, undefined, 2)}</pre>} */}
      <Table responsive ="lg">
        <thead>
          <tr style={ {backgroundColor: "gray" } }>
            <th>#</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Type</th>
            <th>Active</th>
            <th>Score</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Address</th>
            
          </tr>
        </thead>
        <tbody>
          {Tasks.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td style={{ padding: "10px"}}>{index + 1}</td>
                <td style={{ padding: "10px"}}>{doc.title}</td>
                <td style={{ padding: "20px" }}>{doc.description}</td>
                <td style={{ padding: "10px"}}>{doc.type}</td>
                <td style={{ padding: "10px"}}>{doc.active}</td>
                <td style={{ padding: "10px"}}>{doc.score}</td>
                <td style={{ padding: "10px"}}>{doc.taskLatitude}</td>
                <td style={{ padding: "10px"}}>{doc.taskLongitude}</td>
                <td style={{ padding: "10px"}}>{doc.taskAddress}</td>

                              
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getTaskId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TasksList;
