import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchData } from './blockchainApi';
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
    </Container>
  );
};

export default App;
