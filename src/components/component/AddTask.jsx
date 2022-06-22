import React, { useContext, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { FirebaseContext } from "../../providers/FirebaseProvider";

export default function AddTask() {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async (taskTitle, taskDescription) => {
    try {
      let tasksCollectionref = collection(db, "tasks");
      await addDoc(tasksCollectionref, {
        title: taskTitle,
        description: taskDescription,
        completed:false,
        created:Timestamp.now()

      });
      setTitle("");
      setDescription("");
    } catch (ex) {
      console.log("Firestore Add failure", ex.message);
    }
  };
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (title === "" || description === "") {
  //     alert("Title and Description are needed");
  //     return;
  //   }

  // let payload = { title, description };
  //   addDoc(tasksCollectionref, title)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //     });

  //     alert(title);
  //   }
  // }

  return (
    <div>
      <h4 style={"color:blue;text-align:center;"}>AddTask</h4>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="dec">Description</label>
        <input
          name={description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => addTask(title, description)}>Add Task</button>
      </div>
    </div>
  );
}
