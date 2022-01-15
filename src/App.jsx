import 'bootstrap/dist/css/bootstrap.min.css';
import { NewTaskModal } from 'components/NewTaskModal';
import { TasksTable } from 'components/TasksTable';
import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setIsNewTaskModalOpen } from 'store/AppReducer';
import { fetchData } from './api/blockchainApi';
import { Toolbar } from './components/Toolbar.jsx';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(dispatch);
  }, []);

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
            onClick={() => dispatch(setIsNewTaskModalOpen(true))}>
            Dodaj nowe zadanie
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <TasksTable />
        </Col>
      </Row>
      <NewTaskModal />
    </Container >
  );
};

export default App;
