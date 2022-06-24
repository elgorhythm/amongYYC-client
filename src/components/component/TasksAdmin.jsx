import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddTask from "../admin/tasksTemplate/AddTask";
import TasksList from "../admin/tasksTemplate/TasksList";




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

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddTask id={taskId} setTaskId={setTaskId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <TasksList getTaskId={getTaskIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TasksAdmin