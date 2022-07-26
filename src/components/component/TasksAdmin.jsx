import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddTask from "../admin/tasksTemplate/AddTask";
import TasksList from "../admin/tasksTemplate/TasksList";
import "./TasksAdmin.css";

function TasksAdmin() {
  const [taskId, setTaskId] = useState("");

  const getTaskIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setTaskId(id);
  };
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Tasks Admin</Navbar.Brand>
        </Container>
      </Navbar> */}

      <Container
        style={{
          width: "100%",

          justifyContent: "center",
          // alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          padding: 20,
        }}
      >
        <AddTask
          margin="auto"
          style={{
            margin: "auto",
            marginLeft: 200,
          }}
          id={taskId}
          setTaskId={setTaskId}
        />

        <TasksList
          style={{
            width: "100%",
          }}
          getTaskId={getTaskIdHandler}
        />
      </Container>
    </>
  );
}

export default TasksAdmin;
