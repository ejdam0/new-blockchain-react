import 'bootstrap/dist/css/bootstrap.min.css';
import { TasksTable } from 'components/TasksTable';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchData } from './api/blockchainApi';
import { Toolbar } from './components/Toolbar.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Toolbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <TasksTable />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
