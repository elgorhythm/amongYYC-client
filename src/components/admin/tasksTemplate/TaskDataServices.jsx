import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useContext } from "react";
import { FirebaseContext } from "../../../providers/FirebaseProvider";

function TaskDataService() {
  const fbContext = useContext(FirebaseContext);
  let db = fbContext.db;
  let taskCollectionRef = collection(db, "tasks1");

  const addtasks = (newTask) => {
    return addDoc(taskCollectionRef, newTask);
  };

  const updateTask = (id, updatedTask) => {
    const taskDoc = doc(db, "tasks1", id);
    return updateDoc(taskDoc, updatedTask);
  };

  const deleteTask = (id) => {
    const taskDoc = doc(db, "tasks1", id);
    return deleteDoc(taskDoc);
  };

  const getAllTasks = () => {
    return getDocs(taskCollectionRef);
  };

  const getTask = (id) => {
    const taskDoc = doc(db, "tasks1", id);
    return getDoc(taskDoc);
  };
}

export default TaskDataService;
