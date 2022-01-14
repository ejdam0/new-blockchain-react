import React, { useEffect, useState } from 'react';
import { Alert, Container, Form, ProgressBar, Row, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export const TaskProgress = (props) => {
    const [invalid, setInvalid] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        setInputValue(props.progress);
    }, [props.progress]);

    const handleValidateAndChangeInput = (value) => {
        const inputValue = value.target.value;
        setInputValue(inputValue);
        if (inputValue > 100 || value.target.value < 0) {
            setInvalid(true);
        } else {
            setInvalid(false);
        }
    };

    const handleChangeProgress = () => {
        // TODO dispatch and update props.id, inputValue
    };

    return (
        <Stack>
            <Container>
                <Row style={{ marginBottom: "1rem", width: "50%" }}>
                    <Form.Label>Zmień postęp</Form.Label>
                    <Form.Control
                        onChange={(value) => handleValidateAndChangeInput(value)}
                        onBlur={() => handleChangeProgress()}
                        type="number"
                        value={inputValue}
                        isInvalid={invalid}
                    />
                </Row>
            </Container>
            <Container>
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
                } </Container>
        </Stack>
    );
};
