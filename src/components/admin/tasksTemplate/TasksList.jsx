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
  let taskCollectionRef = collection(db, "tasks1");

  const deleteTask = (id) => {
    const taskDoc = doc(db, "tasks1", id);
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
      <div className="mb-2">
        <Button variant="dark edit" onClick={getTasks}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(Tasks, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Tasks.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.description}</td>
                <td>{doc.status}</td>
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
