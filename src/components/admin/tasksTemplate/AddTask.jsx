import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import { FirebaseContext } from "../../../providers/FirebaseProvider";


const AddTask = ({ id, setTaskId }) => {
    const fbContext = useContext(FirebaseContext);
    let db = fbContext.db;
    let taskCollectionRef = collection(db, "tasks1");
  
    const addTasks = (newTask) => {
        return addDoc(taskCollectionRef, newTask);
      };

      const updateTask = (id, updatedTask) => {
        const taskDoc = doc(db, "tasks1", id);
        return updateDoc(taskDoc, updatedTask);
      };


      const getTask = (id) => {
        const taskDoc = doc(db, "tasks1", id);
        return getDoc(taskDoc);
      };
 




  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || description === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newTask = {
      title,
      description,
      status,
    };
    console.log(newTask);

    try {
      if (id !== undefined && id !== "") {
        await updateTask(id, newTask);
        setTaskId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await addTasks(newTask);
        setMessage({ error: false, msg: "New Task added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setDescription("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await getTask(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setDescription(docSnap.data().description);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTaskTitle">
            <InputGroup>
              <InputGroup.Text id="formTaskTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTaskAuthor">
            <InputGroup>
              <InputGroup.Text id="formTaskAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Active");
                setFlag(true);
              }}
            >
              Active
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Active");
                setFlag(false);
              }}
            >
              Not Active
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddTask;