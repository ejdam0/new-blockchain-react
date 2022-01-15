import 'bootstrap/dist/css/bootstrap.min.css';
import { TasksTable } from 'components/TasksTable';
import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './api/blockchainApi';
import { Toolbar } from './components/Toolbar.jsx';
import { addTask } from "./store/AppReducer";

const App = () => {
  const latestTaskIndex = useSelector((state) => state.appReducer.taskCount);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(dispatch);
  }, []);

  const handleAddNewTask = () => {
    dispatch(addTask({
      id: latestTaskIndex,
      taskName: '',
      progress: 0,
      isDone: false,
      isRecentlyCreated: true
    }));
  };

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Toolbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            style={{ marginTop: "5rem" }}
            onClick={() => handleAddNewTask()}>
            Dodaj nowe zadanie
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <TasksTable />
        </Col>
      </Row>
    </Container >
  );
};

export default App;
