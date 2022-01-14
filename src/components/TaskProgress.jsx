import React from 'react';
import { Alert, Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';

export const TaskProgress = (props) => {
    return (
        <Container>
            <Row style={{ marginBottom: "1rem" }}>
                <Col> <Button>Zmień postęp</Button></Col>
            </Row>
            {props.progress === 0 ?
                <Row>
                    <Alert variant="danger">
                        Brak postępu w zadaniu!
                    </Alert>
                </Row> :
                <Row style={{ marginBottom: "1rem" }}>
                    <ProgressBar animated now={props.progress} label={`${props.progress}%`} variant={props.progress === 0 ? "danger" :
                        props.progress === 0 ? "success" : ""} />
                </Row>
            }
        </Container >
    );
};
